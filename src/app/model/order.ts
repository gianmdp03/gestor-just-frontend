import { Customer } from "./customer";
import { Product } from "./product";

export interface Order {
  id:number;
  amount:number;
  description?:string;
  saleDate:Date;
  customer:Customer;
  products?:Product[];
}
