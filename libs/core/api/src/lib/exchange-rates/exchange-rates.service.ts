import { Injectable, Optional } from '@angular/core';

import { BaseUrl } from '../config.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExchangeRatesService {
  private baseUrl: string;

  constructor(
    @Optional() baseUrl: BaseUrl,
    private http: HttpClient
  ) {
    if ( baseUrl ) {
      this.baseUrl = baseUrl.url;
      console.log(this.baseUrl);
    }
  }

  getExchangeRates() {
    return this.http.get(`${this.baseUrl}exchange-rate`);
  }
}
