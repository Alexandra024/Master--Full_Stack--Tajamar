import { Component } from '@angular/core';​
import { RouterOutlet } from '@angular/router';​
import { CommonModule } from '@angular/common';​
import { FormsModule, NgForm, NgModel, ValidationErrors } from '@angular/forms';​

import { Model } from './repository.model';​
import { Product } from './product.model';​
import { PaAttrDirective } from '../directives/attr.directive';​
import { PaModel } from '../directives/twoway.directive';​
import { PaStructureDirective } from '../directives/structure.directive';​
import { PaIteratorDirective } from '../directives/iterator.directive';​
import { PaCellColor } from '../directives/cellColor.directive';​
import { PaCellColorSwitcher } from '../directives/cellColorSwitcher.directive';​
import { ProductTableComponent } from './product-table/product-table.component';​
import { ProductFormComponent } from './product-form/product-form.component';​

@Component({​
  selector: 'app-product',​
  standalone: true,​
  imports: [RouterOutlet, CommonModule, FormsModule,​
    PaAttrDirective, PaModel, PaStructureDirective,​
    PaIteratorDirective, PaCellColor, PaCellColorSwitcher,​
    ProductTableComponent, ProductFormComponent],​
  templateUrl: './product.component.html',​
  styleUrl: './product.component.css'​
})​


export class ProductComponent {
  model: Model = new Model();
  showTable: boolean = false;

  // targetName: string = 'Kayak';

  selectedProduct: string | undefined;
  newProduct: Product = new Product();

  formSubmitted: boolean = false;

  get jsonProduct(): string {
    return JSON.stringify(this.newProduct);
  }

  // constructor(ref: ApplicationRef) {
  //   if (typeof window !== undefined) {
  //     (<any>window).appRef = ref;
  //     (<any>window).model = this.model;
  //   }
  // }

  // getProductByPosition(position: number): Product | undefined {
  //   return this.model.getProducts()[position];
  // }

  getProductById(id: number): Product | undefined {
    return this.model.getProduct(id);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }

  addProduct(p: Product) {
    console.log(`Adding product: ${JSON.stringify(p)}`);
  }

  getMessages(errors: ValidationErrors | null, name: string): string[] {
    let messages: string[] = [];

    if (errors) {
      for (let e in errors) {
        switch (e) {
          case 'required':
            messages.push(`You must enter a ${name}`);
            break;
          case 'minlength':
            messages.push(
              `A ${name} must be at least ${errors['minlength'].requiredLength} characters`,
            );
            break;
          case 'pattern':
            messages.push(`The ${name} contains illegal characters`);
            break;
        }
      }
    }

    return messages;
  }

  getValidationMessages(state: NgModel, name?: string) {
    let item: string = state.path?.[0] ?? name;
    return this.getMessages(state.errors, item);
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.resetForm();
      this.formSubmitted = false;
    }
  }

  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];

    Object.keys(form.controls).forEach((key) => {
      this.getMessages(form.controls[key].errors, key).forEach((message) => {
        messages.push(message);
      });
    });

    return messages;
  }

  deleteProduct(key: number){
    this.model.deleteProduct(key);
  }
  // getProductCount(): number {
  //   return this.model.getProducts().length;
  // }

  // getClasses(key: number): string {
  //   let product = this.model.getProduct(key);
  //   return 'p-2' + (product?.price && product.price < 50 ? ' bg-info' : ' bg-warning');

  //   // return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
  // }

  // getClassesMap(key: number): Object {
  //   let product = this.model.getProduct(key);
  //   return {
  //     'text-center bg-danger': product?.name === 'Kayak',
  //     'bg-info': product?.price && product.price < 50,
  //   };
  // }

  // public fontSizeWithUnits: string = '30px';
  // public fontSizeWithoutUnits: string = '30';

  // getStyles(key: number): Object {
  //   let product = this.model.getProduct(key);
  //   return {
  //     'font-size': '30px',
  //     'margin.px': 100,
  //     color: product?.price && product.price < 50 ? 'green' : 'red',
  //   };
  // }
}
