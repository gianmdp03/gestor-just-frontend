import { OrderList } from "./order-list";

export interface ProductDetail {
  id:number;
  name:string;
  imageUrl:string;
  orders:OrderList[];
}
