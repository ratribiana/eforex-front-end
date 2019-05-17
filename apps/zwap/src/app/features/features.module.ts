import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RatesComponent } from './rates/rates.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from '@zwap/material';
import { CoreApiModule } from '@zwap/core/api';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'rates', component: RatesComponent }
    ]),
    CoreApiModule.forRoot({url: environment.baseUrl}),
  ],
  declarations: [ HomeComponent, RatesComponent ],
  exports: [ RouterModule ]
})
export class FeaturesModule { }
