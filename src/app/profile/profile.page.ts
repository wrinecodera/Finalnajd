import { Component } from "@angular/core";
import { Item } from "../models/item/item.model";
import { CrudItemService } from "../services/crud-item/crud-item.service";
@Component({
  selector: "app-profile",
  templateUrl: "profile.page.html",
  styleUrls: ["profile.page.scss"]
})
export class ProfilePage {
  item: Item = {
    name: "",
    price: undefined,
    bedQty: undefined,
    location: ""
  };
  constructor(private crudItem: CrudItemService) {}
  addItem(item: Item) {
    this.crudItem.addItem(item).then(ref => {
      console.log(ref.key);
    });
  }
}
