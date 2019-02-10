import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FilterPage } from "../filter/filter.page";
import { Observable } from "rxjs/Observable";
import { Item } from "../models/item/item.model";
import { CrudItemService } from "../services/crud-item/crud-item.service";
import "rxjs/add/operator/map";
@Component({
  selector: "app-result",
  templateUrl: "result.page.html",
  styleUrls: ["result.page.scss"]
})
export class ResultPage {
  crudItemList$: Observable<Item[]>;

  constructor(
    public modalCtrl: ModalController,
    private cudItem: CrudItemService
  ) {
    this.crudItemList$ = this.cudItem
      .getItem() //db list
      .snapshotChanges() //key and values
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }));
      });
  }
  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      componentProps: {}
    });
    await modal.present();
  }
}
