import { OrderList } from './order-list';
export interface CustomerDetail {
  id:number;
  name:string;
  lastname:string;
  phoneNumber:string;
  orders:OrderList[];
}
