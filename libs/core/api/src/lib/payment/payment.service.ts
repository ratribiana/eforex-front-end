import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseUrl } from '../config.model';

@Injectable()
export class PaymentService {
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

  getCountries() {
    return this.http.get(`${this.baseUrl}countries`);
  }

  getStateByCountry(country: string) {
    return this.http.get(`${this.baseUrl}states/${country}`);
  }
}
