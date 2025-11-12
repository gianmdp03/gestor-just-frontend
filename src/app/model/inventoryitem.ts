import { Product } from "./product";
import { Ubication } from "./ubication";

export interface Inventoryitem {
  id:number;
  product:Product;
  ubication:Ubication;
  stock:number;
  expireDate:Date;
}
