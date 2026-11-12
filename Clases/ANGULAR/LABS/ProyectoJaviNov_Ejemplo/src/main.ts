import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProductComponent } from './product/product';

bootstrapApplication(ProductComponent, appConfig)
  .catch((err) => console.error(err));
