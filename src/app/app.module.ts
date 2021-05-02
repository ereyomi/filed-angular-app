import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { WelcomeComponent } from './welcome/welcome.component';
import { InputComponent } from './shared/input/input.component';
import { CardComponent } from './shared/card/card.component';
import { RadioInputComponent } from './shared/radio-input/radio-input.component';
import { SelectComponent } from './shared/select/select.component';
import { WelcomeFormComponent } from './welcome/welcome-form/welcome-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InputComponent,
    CardComponent,
    RadioInputComponent,
    SelectComponent,
    WelcomeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
