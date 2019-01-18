import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { ResultPage } from "../result/result.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "result",
        children: [
          {
            path: "",
            component: ResultPage
          },
          {
            path: "bhouse",
            loadChildren: "../bhouse/bhouse.module#BhousePageModule"
          }
        ]
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            loadChildren: "../profile/profile.module#ProfilePageModule"
          }
        ]
      },
      {
        path: "more",
        children: [
          {
            path: "",
            loadChildren: "../more/more.module#MorePageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/result",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
