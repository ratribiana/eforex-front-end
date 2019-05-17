import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { MaterialModule } from '@zwap/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent }
    ]),

    MaterialModule
  ],
  declarations: [LoginComponent, RegistrationComponent],
  exports: [
    RouterModule
  ]
})
export class CoreAuthenticationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreAuthenticationModule,
      providers: []
    };
  }
}
