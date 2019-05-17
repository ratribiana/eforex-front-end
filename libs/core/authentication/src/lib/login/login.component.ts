import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubSink } from 'subsink';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'zwap-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
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
      username: ['', [ Validators.required ]],
      password: ['', [ Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
