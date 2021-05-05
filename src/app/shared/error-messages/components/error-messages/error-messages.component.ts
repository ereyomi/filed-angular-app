import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss'],
})
export class ErrorMessagesComponent implements OnInit {
  private genKey = 'generic_error';
  private readonly errorMessages = {
    required: () => 'Required field',
    minlength: (params: any) =>
      'The minimum number of characters is ' + params.requiredLength,
    maxlength: (params: any) =>
      'The maximum number of characters is ' + params.requiredLength,
    email: (_params: any) => 'Invalid email value.',
    equalTo: (_params: any) => 'The words do not match.',
    pattern: (pattern: any) => this.handlePattern(pattern),
    generic_error: (_params: any) => 'Password doesn\'t match.',
    lowercaseCharacterRule: (params: any) =>
      'The minimum number of lowercase letters is ' + params.required,
    digitCharacterRule: (params: any) =>
      'The minimum number of digits is ' + params.required,
    uppercaseCharacterRule: (params: any) =>
      'The minimum number of capital letters is ' + params.required,
    specialCharacterRule: (params: any) =>
      'The minimum number of special characters is ' + params.required,
  };


  @Input()
  control!: AbstractControlDirective | AbstractControl | null;

  shouldShowErrors(): boolean {
    return typeof this.control !== null ? this.control.errors &&
      (this.control.dirty || this.control.touched) : false;
    /* return (
      this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched)
    ); */
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map((field) =>
      this.getMessage(field, this.control.errors[field])
    );
  }

  private getMessage(type: string, params: any) {
    return this.errorMessages[type]
      ? this.errorMessages[type](params)
      : this.errorMessages[this.genKey](params);
  }

  constructor() { }

  ngOnInit(): void { }

  handlePattern(pattern: any) {
    const rP =
      pattern && pattern.hasOwnProperty('requiredPattern')
        ? RegExp(pattern.requiredPattern).source.toString()
        : null;

    const strongPass = RegExp(
      '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})'
    ).source.toString();

    switch (rP) {
      case strongPass:
        return 'Accepted values: 0-9';
      default:
        return 'Field value error';
    }
  }
}
