import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExchangeRatesService } from './exchange-rates/exchange-rates.service';
import { TransactionsService } from './transactions/transactions.service';

import { BaseUrl } from './config.model';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreApiModule {
  static forRoot(baseUrl: BaseUrl): ModuleWithProviders {
    return {
      ngModule: CoreApiModule,
      providers: [
        { provide: BaseUrl, useValue: baseUrl },
        ExchangeRatesService,
        TransactionsService
      ]
    };
  }
}
