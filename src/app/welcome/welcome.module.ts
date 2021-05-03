import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeRoutingModule } from './welcome-routing-module';



@NgModule({
  declarations: [WelcomeComponent, WelcomeFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    WelcomeRoutingModule
  ],
   exports: [WelcomeComponent, WelcomeFormComponent]
})
export class WelcomeModule { }
