import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputConfig } from 'src/app/welcome/welcome-form/models/input-config';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ]
})

export class InputComponent implements OnInit, ControlValueAccessor {


  @Input() config!: InputConfig;
  @Input() class!: string | '';

  onChange!: (_: any) => void;
  onTouched!: () => void;
  value: any;
  formGroup = this.fb.group({
    input: this.fb.control(null),
  });
  constructor(private fb: FormBuilder) { }
  writeValue(obj: any): void {
    this.value = obj;
    this.formGroup.setValue({ input: obj });
    this.formGroup.updateValueAndValidity();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable({ emitEvent: true });
    } else {
      this.formGroup.enable({ emitEvent: true });
    }
  }

  getFieldValue() {
    const field = this.formGroup.get('input');
    return field ? field.value : null;
  }
  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((vals) => {
      if (this.onChange) {
        this.onChange(this.getFieldValue());
      }
    });
    if (this.isDisable) {
      this.formGroup.disable();
    }
  }

  get isDisable() {
    return this.config?.formStatus?.isDisabled || false;
  }

}
