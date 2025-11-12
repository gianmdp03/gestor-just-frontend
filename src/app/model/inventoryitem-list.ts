import { ProductList } from "./product-list";
import { UbicationList } from "./ubication-list";

export interface InventoryitemList {
  id:number;
  product:ProductList;
  ubication:UbicationList;
  stock:number;
  expireDate:Date;
}
