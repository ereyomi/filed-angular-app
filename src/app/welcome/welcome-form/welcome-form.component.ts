import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlDirective, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InputConfig } from './models/input-config';
import * as UserActions from './../store/welcome-action';
import { CountryDialCodeService } from 'src/app/core/services/country-dial-code/country-dial-code.service';
import { Observable } from 'rxjs';
import { CountryDialCodeWithCurrencyModel } from 'src/app/core/model/country-dial-code-with-currency-model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UserState } from '../store/user-state';
import { getPaymentSelector } from '../store/welcome-reducer';
import { ConditionalExpr } from '@angular/compiler';
@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss']
})
export class WelcomeFormComponent implements OnInit {

  componentForm!: FormGroup;
  countryDialCode: Observable<Array<CountryDialCodeWithCurrencyModel>> | undefined = this.countryDialS.getCountryDialCodes();
  condition!: string;
  steps = {
    stepOne: 'stepOne',
    stepTwo: 'stepTwo',
  };
  constructor(
    private fb: FormBuilder,
    private store: Store<UserState>,
    private countryDialS: CountryDialCodeService,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.defaultStep();
    this.componentForm.valueChanges.subscribe(v => console.log(this.componentForm.controls.lastName));
  }
  inputConfig(
    label: string,
    type: string = 'text',
    formControl: AbstractControl | null = null
  ): InputConfig {
    return {
      inputLabel: {
        text: label || '',
      },
      type: type || 'text',
      formStatus: {
        isError: formControl ? ((formControl.invalid && formControl.dirty) ? true : false) : false,
      }
    };
  }
  initForm(): void {
    this.componentForm = this.fb.group({
      firstName: [
        null,
        [
          Validators.required
        ]
      ],
      lastName: [
        null,
        [
          Validators.required,
        ]
      ],
      companyName: [
        null,
        Validators.required,
      ],
      monthlyAdvertisingBudget: [
        null, Validators.required,
      ],
      dialCode: [
        '',
        Validators.required,
      ],
      phoneNumber: [
        '',
        Validators.required,
      ],
    });
  }
  submit(): void {
    if (this.componentForm.valid) {
      this.store.dispatch(new UserActions.AddUser(this.componentForm.value));
      this.toastrService.success('Processing Payment', 'SUCCESS', {
        timeOut: 1000
      });
      this.router.navigate(['display'], { relativeTo: this.activatedRoute });

    } else {
      this.componentForm.markAllAsTouched();
      this.markDirty();
      this.componentForm.updateValueAndValidity();
      this.toastrService.error('Looks like you are yet to completely fill the form', 'ERROR', {
        timeOut: 3000
      });
    }
  }
  defaultStep(): void {
    this.condition = this.steps.stepTwo;
  };
  switchStepTwo(): void {
    this.condition = this.steps.stepTwo;
  }
  markDirty() {
    this.markGroupDirty(this.componentForm);
  }
  markGroupDirty(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      if (formGroup.get(key) && formGroup.get(key).constructor.name) {
        switch (formGroup.get(key).constructor.name) {
          case 'FormGroup':
            this.markGroupDirty(formGroup.get(key) as FormGroup);
            break;
          case 'FormArray':
            this.markArrayDirty(formGroup.get(key) as FormArray);
            break;
          case 'FormControl':
            this.markControlDirty(formGroup.get(key) as FormControl);
            break;
        }
      }
    });
  }
  markArrayDirty(formArray: FormArray) {
    formArray.controls.forEach(control => {
      switch (control.constructor.name) {
        case 'FormGroup':
          this.markGroupDirty(control as FormGroup);
          break;
        case 'FormArray':
          this.markArrayDirty(control as FormArray);
          break;
        case 'FormControl':
          this.markControlDirty(control as FormControl);
          break;
      }
    });
  }
  markControlDirty(formControl: FormControl) {
    formControl.markAsDirty();
  }

}
