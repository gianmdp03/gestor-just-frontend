import { CustomerList } from "./customer-list";

export interface OrderList {
  id:number;
  amount:number;
  saleDate:Date;
  customer:CustomerList;
}
