import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-bhouse",
  templateUrl: "./bhouse.page.html",
  styleUrls: ["./bhouse.page.scss"]
})
export class BhousePage {
  session: any;
  defaultHref = "";
  constructor(private route: ActivatedRoute) {}

  ionViewDidLoad() {
    console.log();
  }
}
