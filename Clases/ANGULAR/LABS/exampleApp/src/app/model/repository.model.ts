import { Injectable signal } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
@Injectable({
  providedIn: 'root',
})
export class Model {

  private products: signal(Product[]);
  private locator = (p: Product, id: number) => p.id == id;

  constructor(private dataSource: StaticDataSource) {
    this.products = new Array<Product>();
    this.dataSource.getData().forEach((p) => this.products.push(p));
  }

  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product | undefined {

        return this.products().find(p => this.locator(p, id));

    }

    saveProduct(product: Product) {

        if (product.id == null || product.id === 0) {

            product.id = this.generateID();

            this.products.update(products => [...products, product]);

        } else {

            const id = product.id;

            const products = this.products();

            const index = products

                .findIndex(p => this.locator(p, id));

            if (index >= 0) {

                this.products.set(products.map(p =>

                    this.locator(p, id) ? product : p));

            } else {

                product.id = this.generateID();

                this.products.update(current => [...current, product]);

            }

        }

    }



    deleteProduct(id: number) {

        const products = this.products();

        const updatedProducts = products.filter(p => !this.locator(p, id));

        if (updatedProducts.length !== products.length) {

            this.products.set(updatedProducts);

        }

    }



    private generateID(): number {

        let candidate = 100;

        while (this.getProduct(candidate) != null) {

            candidate++;

        }

        return candidate;

    }

}
