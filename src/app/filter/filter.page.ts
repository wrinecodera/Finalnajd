import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.page.html",
  styleUrls: ["./filter.page.scss"]
})
export class FilterPage {
  constructor(public ModalController: ModalController) {}
  dismiss(data?: any) {
    this.ModalController.dismiss(data);
  }
}
