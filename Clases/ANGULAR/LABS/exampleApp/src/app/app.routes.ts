import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './core/product-form/product-form';
import { ProductTableComponent } from './core/product-table/product-table';

export const routes: Routes = [
  { path: 'form/:mode/:id', component: ProductFormComponent },
  { path: 'form/:mode', component: ProductFormComponent },
  { path: '', component: ProductTableComponent }
];

export const routing = RouterModule.forRoot(routes);
