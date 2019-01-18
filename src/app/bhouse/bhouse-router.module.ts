import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { BhousePage } from "./bhouse.page";

const routes: Routes = [
  {
    path: "",
    component: BhousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhouseRouterModule {}
