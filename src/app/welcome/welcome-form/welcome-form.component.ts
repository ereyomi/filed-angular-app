import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InputConfig } from './models/input-config';
import * as UserActions from './../store/welcome-action';
import { CountryDialCodeModel, CountryDialCodeService } from 'src/app/core/services/country-dial-code/country-dial-code.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss']
})
export class WelcomeFormComponent implements OnInit {

  componentForm!: FormGroup;
  countryDialCode: Observable<Array<CountryDialCodeModel>> | undefined = this.countryDialS.getCountryDialCodes();
  constructor(private fb: FormBuilder, private store: Store<any>, private countryDialS: CountryDialCodeService) { }

  ngOnInit(): void {
    this.initForm();
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
  submit() {
    console.log('clicked', this.componentForm.value);
    this.store.dispatch(new UserActions.AddUser({ firstName: 'ere' }));
  }

}
