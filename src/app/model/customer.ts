import { Order } from "./order";

export interface Customer {
  id:number;
  name:string;
  lastname:string;
  phoneNumber:string;
  orders?:Order[];
}
