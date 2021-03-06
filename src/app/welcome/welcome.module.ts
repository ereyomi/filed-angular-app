import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/welcome-reducer';
import { DisplaypageComponent } from './displaypage/displaypage.component';

@NgModule({
  declarations: [WelcomeComponent, WelcomeFormComponent, DisplaypageComponent],
  imports: [
    CommonModule,
    SharedModule,
    WelcomeRoutingModule,
    StoreModule.forFeature('welcome', userReducer),
  ],
  exports: [WelcomeComponent, WelcomeFormComponent]
})
export class WelcomeModule { }
