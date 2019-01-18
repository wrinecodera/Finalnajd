import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { TabsPageRoutingModule } from "./tabs.router.module";
import { TabsPage } from "./tabs.page";
import { ResultPageModule } from "../result/result.module";
import { BhousePageModule } from "../bhouse/bhouse.module";
import { MorePageModule } from "../more/more.module";
import { ProfilePageModule } from "../profile/profile.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TabsPageRoutingModule,
    ResultPageModule,
    BhousePageModule,
    MorePageModule,
    ProfilePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
