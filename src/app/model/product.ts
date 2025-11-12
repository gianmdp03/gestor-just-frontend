import { Order } from "./order";

export interface Product {
  id:number;
  name:string;
  imageUrl:string;
  orders:Order[];
}
