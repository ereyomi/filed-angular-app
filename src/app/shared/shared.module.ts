import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { RadioInputComponent } from './radio-input/radio-input.component';



@NgModule({
  declarations: [CardComponent, InputComponent, RadioInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ReactiveFormsModule, CardComponent, InputComponent, RadioInputComponent]
})
export class SharedModule { }
