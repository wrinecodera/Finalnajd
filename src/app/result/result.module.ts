import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ResultPage } from "./result.page";
import { ResultRoutingModule } from "./result.router.module";
import { FilterPage } from "../filter/filter.page";

@NgModule({
  imports: [
    IonicModule, 
    CommonModule, FormsModule,
     ResultRoutingModule
    ],
  declarations: [ResultPage, FilterPage],
  entryComponents: [FilterPage]
})
export class ResultPageModule {}
