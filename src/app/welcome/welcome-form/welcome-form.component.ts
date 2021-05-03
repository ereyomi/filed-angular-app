import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InputConfig } from './models/input-config';
import * as UserActions from './../store/welcome-action';
import { CountryDialCodeService } from 'src/app/core/services/country-dial-code/country-dial-code.service';
import { Observable } from 'rxjs';
import { CountryDialCodeWithCurrencyModel } from 'src/app/core/model/country-dial-code-with-currency-model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserState } from '../store/user-state';
import { getPaymentSelector } from '../store/welcome-reducer';
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
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.defaultStep();
  }
  inputConfig(
    label: string,
    type: string = 'text',
  ): InputConfig {
    return {
      inputLabel: {
        text: label || '',
      },
      type: type || 'text',
    };
  }
  initForm(): void {
    this.componentForm = this.fb.group({
      firstName: [
        null,
        [
          Validators.min(10)
        ]
      ],
      lastName: [
        null,
        Validators.required,
      ],
      companyName: [
        '',
        Validators.required,
      ],
      monthlyAdvertisingBudget: [
        '', Validators.required,
      ],
      dialCode: [
        '',
        Validators.required,
      ],
      tel: [
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
      this.router.navigateByUrl('/display');
      
    } else {
      this.toastrService.error('Unable to dispatch at this instant', 'ERROR', {
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

}
