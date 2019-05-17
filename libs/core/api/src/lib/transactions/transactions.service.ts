import { Injectable, Optional } from '@angular/core';

import { BaseUrl } from '../config.model';

@Injectable()
export class TransactionsService {
  private baseUrl: string;

  constructor(
    @Optional() baseUrl: BaseUrl
  ) {
    if ( baseUrl ) {
      this.baseUrl = baseUrl.url;
      console.log(this.baseUrl);
    }
  }
}
