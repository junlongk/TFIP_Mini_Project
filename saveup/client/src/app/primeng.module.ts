import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabMenuModule } from "primeng/tabmenu";
import { RippleModule } from "primeng/ripple";
import { ButtonModule } from "primeng/button";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule,
    TabMenuModule,
    RippleModule,
    ButtonModule,
    CardModule,
    ToolbarModule,
    InputTextModule
  ]
})
export class PrimengModule { }