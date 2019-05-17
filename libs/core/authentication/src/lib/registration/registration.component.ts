import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubSink } from 'subsink';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'zwap-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  public form: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  handleForm() {
    console.log(this.form.value);
  }

  buildForm() {
    this.form = this.fb.group({
      firstname: ['', [ Validators.required ]],
      lastname: ['', [ Validators.required ]],
      birthdate: ['', [ Validators.required ]],
      email: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]],
      confirmPassword: ['', [ Validators.required ]]
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
