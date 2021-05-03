import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaypageComponent } from './displaypage.component';
import { DisplayRoutingPageModule } from './displaypage-routing.module';



@NgModule({
  declarations: [
    DisplaypageComponent
  ],
  imports: [
    CommonModule,
    DisplayRoutingPageModule
  ]
})
export class DisplaypageModule { }
