import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel, ValidationErrors } from '@angular/forms';

import { Product } from '../product.model';
import { Model } from '../repository.model';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-form.html',
})
export class ProductFormComponent {
  newProduct: Product = new Product();
  model: Model = new Model();
  formSubmitted: boolean = false;

  @Output('paNewProduct')
  newProductEvent = new EventEmitter<Product>();

  getMessages(errs: ValidationErrors | null, name: string): string[] {
    const messages: string[] = [];

    for (const errorName in errs) {
      switch (errorName) {
        case 'required':
          messages.push(`You must enter a ${name}`);
          break;

        case 'minlength':
          messages.push(
            `A ${name} must be at least ${errs['minlength'].requiredLength} characters`
          );
          break;

        case 'pattern':
          messages.push(`The ${name} contains illegal characters`);
          break;
      }
    }

    return messages;
  }

  getValidationMessages(state: NgModel, thingName?: string): string[] {
    const thing: string = state.path?.[0] ?? thingName ?? '';
    return this.getMessages(state.errors, thing);
  }

  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];

    Object.keys(form.controls).forEach(k => {
      this.getMessages(form.controls[k].errors, k)
        .forEach(m => messages.push(m));
    });

    return messages;
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      form.resetForm();
      this.formSubmitted = false;
    }
  }
}