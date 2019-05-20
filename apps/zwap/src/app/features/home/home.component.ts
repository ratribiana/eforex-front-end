import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubSink } from 'subsink';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ExchangeRatesService, PaymentService } from '@zwap/core/api';

import { filter, find, map } from 'rxjs/operators';

@Component({
  selector: 'zwap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  public form: FormGroup;
  public booking: FormGroup;
  public collection: FormGroup;
  public payment: FormGroup;
  public countries$;
  public states$;
  public rates$;
  public ratesTo = [];

  selectedBaseRate;
  selectedRateFrom;
  selectedRateFromSymbol;
  selectedRateTo;
  rate;

  constructor(
    private fb: FormBuilder,
    private exchangeRateService: ExchangeRatesService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.countries$ = this.paymentService.getCountries();
    this.rates$ = this.exchangeRateService.getExchangeRates();

    this.buildForm();
  }

  rateSelectionChange(event, value) {
    this.rates$.pipe(
      map((n: Array<any>) => {
        return n.filter(a => a.base === value)[0]
      })
    ).subscribe(res => {
      this.ratesTo = res.rates;
      this.selectedRateFromSymbol = res.currencySymbol;
    });
    this.selectedRateFrom = value;
  }

  getSelectedExchangeRate(event) {
    this.ratesTo.map(a => {
      if (a.currency === event.value) {
        this.rate = a.rate;
        this.selectedRateTo = a.currencySymbol;
      }
    });
  }

  getSelectedCountry(event) {
    console.log(event)
    if ( event.value ) {
      console.log(event)
      this.states$ = this.paymentService.getStateByCountry(event.value);
    }
  }

  handleForm() {
    console.log(this.form.value);
  }

  handleBooking() {
    console.log(this.booking.value);
  }

  handleCollection() {
    console.log(this.collection.value);
  }

  handlePayment() {
    console.log(this.payment.value);
  }

  buildForm() {
    this.form = this.fb.group({

    });

    this.booking = this.fb.group({
      currencyFrom: ['', [ Validators.required ]],
      amountFrom: ['', [ Validators.required ]],
      currencyTo: ['', [ Validators.required ]],
      amountTo: ['', [ Validators.required ]]
    });
    this.collection = this.fb.group({
      firstname: ['', [ Validators.required ]],
      lastname: ['', [ Validators.required ]],
      email: ['', [ Validators.required ]],
      mobile: ['', [ Validators.required ]],
      idType: ['', [ Validators.required ]],
      idNumber: ['', [ Validators.required ]]
    });

    this.payment = this.fb.group({
      country: ['', [ Validators.required ]],
      state: ['', [ Validators.required ]],
      municipalities: ['', [ Validators.required ]],

    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
