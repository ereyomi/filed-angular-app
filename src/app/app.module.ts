import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { WelcomeComponent } from './welcome/welcome.component';
import { InputComponent } from './shared/input/input.component';
import { CardComponent } from './shared/card/card.component';
import { RadioInputComponent } from './shared/radio-input/radio-input.component';
import { WelcomeFormComponent } from './welcome/welcome-form/welcome-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InputComponent,
    CardComponent,
    RadioInputComponent,
    WelcomeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
