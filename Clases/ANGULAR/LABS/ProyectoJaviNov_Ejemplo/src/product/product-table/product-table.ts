import { Component, Input } from '@angular/core';
import { Model, Product } from '../../data/repository.model';
import { PaAttrDirective } from '../../directives/attr.directive';

@Component({
  imports: [PaIteratorDirective],
  selector: 'app-product-table',
  styleUrl: './product-table.css',
  template: '<div> Table Component </div>',
})
export class ProductTableComponent {

  @Input("model")
  dataModel: Model | undefined;

  showTable:boolean = true;

  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }

  getProducts(): Product[] | undefined {
    return this.dataModel?.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel?.deleteProduct(key);
  }


}
