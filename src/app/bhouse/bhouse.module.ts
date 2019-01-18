import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { BhousePage } from "./bhouse.page";
import { BhouseRouterModule } from "./bhouse-router.module";

@NgModule({
  imports: [CommonModule, IonicModule, BhouseRouterModule],
  declarations: [BhousePage]
})
export class BhousePageModule {}
