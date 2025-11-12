import { Inventoryitem } from "./inventoryitem";

export interface Ubication {
  id:number;
  name:string;
  inventoryItems?:Inventoryitem[];
}
