import { CustomerList } from "./customer-list";
import { ProductList } from "./product-list";

export interface OrderDetail {
  id:number;
  amount:number;
  description?:string;
  saleDate:Date;
  customer:CustomerList;
  products:ProductList[];
}
