import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FilterPage } from "../filter/filter.page";
@Component({
  selector: "app-result",
  templateUrl: "result.page.html",
  styleUrls: ["result.page.scss"]
})
export class ResultPage {
  constructor(public modalCtrl: ModalController) {}
  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterPage,
      componentProps: {}
    });
    await modal.present();
  }
}
