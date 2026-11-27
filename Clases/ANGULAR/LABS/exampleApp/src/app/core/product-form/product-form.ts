import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from '../../messages/message';
import { Message } from '../../messages/message.model';
import { Product } from '../../model/product.model';
import { Model } from '../../model/repository.model';
import { Component, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ValidationErrorsDirective } from '../directives/validation-errors';
import { FilteredFormArray } from '../filteredFormArray';
import { LimitValidator } from '../../validation/limit';
import { HiLowValidatorDirective } from '../directives/hillow';
import { UniqueValidator } from '../../validation/unique';
import { ProhibitedValidator } from '../../validation/prohibited';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ValidationErrorsDirective,
    HiLowValidatorDirective,
    RouterModule,
  ],
  standalone: true,
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product();
  editing = false;
  readonly saving = signal(false);
  keywordGroup = new FilteredFormArray([this.createKeywordFormControl()], {
    validators: UniqueValidator.unique(),
  });
  productForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[A-Za-z ]+$'),
      ],
      updateOn: 'change',
    }),
    category: new FormControl('', {
      validators: Validators.required,
      asyncValidators: ProhibitedValidator.prohibited(),
    }),
    price: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^[0-9]+(\\.[0-9]+)?$'),
        LimitValidator.Limit(300),
      ],
    }),
    details: new FormGroup({
      supplier: new FormControl('', { validators: Validators.required }),
      keywords: this.keywordGroup,
    }),
  });
  constructor(
    private model: Model,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
  ) {}
  ngOnInit() {
    this.productForm.get('details')?.statusChanges.subscribe((newStatus) => {
      this.messageService.reportMessage(new Message(`Details ${newStatus}`));
    });
    this.route.paramMap.subscribe((params) => {
      const mode = params.get('mode');
      const id = params.get('id');
      if (mode === 'edit' && id !== null) {
        const selectedProduct = this.model.getProduct(id);
        if (selectedProduct) {
          this.setProduct(selectedProduct);
        } else {
          this.messageService.reportMessage(new Message('Unable to find product to edit', true));
          void this.router.navigate(['/form/create']);
        }
      } else {
        this.setCreateMode();
      }
    });
  }
  submitForm() {
    if (!this.productForm.valid) {
      return;
    }
    const formValue = this.productForm.getRawValue();
    Object.assign(this.product, {
      name: String(formValue.name ?? '').trim(),
      category: String(formValue.category ?? '').trim(),
      price: Number(formValue.price),
      details: {
        supplier: String(formValue.details?.supplier ?? '').trim(),
        keywords: (formValue.details?.keywords ?? [])
          .map((keyword: string) => String(keyword ?? '').trim())
          .filter((keyword: string) => keyword.length > 0),
      },
    });
    this.saving.set(true);
    this.model
      .saveProduct(this.product)
      .pipe(finalize(() => this.saving.set(false)))
      .subscribe({
        next: () => {
          if (this.editing) {
            void this.router.navigate(['/form/create']);
          } else {
            this.setCreateMode();
          }
        },
        error: (error: unknown) => {
          console.error('Error saving product', error);
          this.messageService.reportMessage(new Message('Unable to save product', true));
        },
      });
  }
  resetForm() {
    this.setCreateMode();
  }
  addKeyword() {
    this.keywordGroup.push(this.createKeywordFormControl());
  }
  removeKeyword(index: number) {
    if (this.keywordGroup.length > 1) {
      this.keywordGroup.removeAt(index);
    }
  }
  private setProduct(selectedProduct: Product) {
    this.editing = true;
    this.product = new Product(
      selectedProduct.id,
      selectedProduct.name,
      selectedProduct.category,
      selectedProduct.price,
      {
        supplier: selectedProduct.details?.supplier ?? '',
        keywords: [...(selectedProduct.details?.keywords ?? [])],
      },
    );
    this.messageService.reportMessage(new Message(`Editing ${this.product.name}`));
    this.populateForm();
  }
  private setCreateMode() {
    this.editing = false;
    this.product = new Product(undefined, '', '', undefined, {
      supplier: '',
      keywords: [],
    });
    this.messageService.reportMessage(new Message('Creating New Product'));
    this.populateForm();
  }
  private populateForm() {
    const keywords = this.product.details?.keywords ?? [];
    const formKeywords = keywords.length > 0 ? keywords : [''];
    this.keywordGroup.clear({ emitEvent: false });
    for (const keyword of formKeywords) {
      this.keywordGroup.push(this.createKeywordFormControl(keyword), {
        emitEvent: false,
      });
    }
    this.productForm.reset(
      {
        name: this.product.name ?? '',
        category: this.product.category ?? '',
        price: this.product.price ?? '',
        details: {
          supplier: this.product.details?.supplier ?? '',
        },
      },
      { emitEvent: false },
    );
    this.keywordGroup.setValue(formKeywords, { emitEvent: false });
  }
  private createKeywordFormControl(value = ''): FormControl<string> {
    return new FormControl(value, {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^[A-Za-z ]+$')],
    });
  }
}
