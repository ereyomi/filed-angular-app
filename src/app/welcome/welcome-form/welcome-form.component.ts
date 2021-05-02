import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss']
})
export class WelcomeFormComponent implements OnInit {

  componentForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  initForm(): void {
    this.componentForm = this.fb.group({
    });
  }

}
