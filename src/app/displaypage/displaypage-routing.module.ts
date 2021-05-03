import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaypageComponent } from './displaypage.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: DisplaypageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayRoutingPageModule { }
