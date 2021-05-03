import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { InputConfig } from './models/input-config';
import * as UserActions from './../store/welcome-action';
import { UserState } from '../store/welcome-reducer';
@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss']
})
export class WelcomeFormComponent implements OnInit {

  componentForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<any>) { }

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
        '',
        Validators.required,
      ],
    });
  }
  submit() {
    console.log('clicked');
    this.store.dispatch(new UserActions.AddUser({ firstName: 'ere' }));
  }

}
