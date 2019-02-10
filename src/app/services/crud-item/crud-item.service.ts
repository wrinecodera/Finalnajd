import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";
@Injectable()
export class CrudItemService {
  private crudItemRef = this.db.list<Item>("crud-Item");
  constructor(private db: AngularFireDatabase) {}

  getItem() {
    return this.crudItemRef;
  }
  addItem(item: Item) {
    return this.crudItemRef.push(item);
  }
}
