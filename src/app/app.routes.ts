import { Routes } from '@angular/router';
import { ProductHome } from './page/product/product-home/product-home';
import { UbicationHome } from './page/ubication/ubication-home/ubication-home';
import { CustomerHome } from './page/customer/customer-home/customer-home';
import { OrderHome } from './page/order/order-home/order-home';

export const routes: Routes = [
  {path:"product", component:ProductHome},
  {path:"ubication", component:UbicationHome},
  {path:"customer", component:CustomerHome},
  {path:"order", component:OrderHome}
];
