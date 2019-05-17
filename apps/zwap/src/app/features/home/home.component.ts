import { Component, OnInit, OnDestroy } from '@angular/core';

import { SubSink } from 'subsink';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ExchangeRatesService } from '@zwap/core/api';

@Component({
  selector: 'zwap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subs = new SubSink();

  public form: FormGroup;
  public rates$ = this.exchangeRateService.getExchangeRates();
  public ratesTo = [];

  selectedBaseRate;
  selectedRateFrom;
  selectedRateTo;
  rate;

  constructor(
    private fb: FormBuilder,
    private exchangeRateService: ExchangeRatesService
  ) { }

  ngOnInit() {
    // this.exchangeRateService.getExchangeRates().subscribe(res => console.log(res));
  }

  rateSelectionChange(event) {
    this.selectedBaseRate = event.value;
    this.selectedRateFrom = event.value.base;
    console.log(event.value.rates);
    this.ratesTo = Object.keys(event.value.rates);
    console.log(this.ratesTo);
  }

  getSelectedExchangeRate(event) {
    this.selectedRateTo = event.value;
    this.rate = this.selectedBaseRate.rates[event.value];
    console.log(event, this.selectedBaseRate.rates[event.value]);
  }

  handleForm() {
    console.log(this.form.value)
  }

  buildForm() {
    this.form = this.fb.group({
      booking: this.fb.group({
        exchangeFrom: this.fb.group({
          currrency: ['', []],
          amount: ['', []]
        }),
        exchangeTo: this.fb.group({
          currrency: ['', []],
          amount: ['', []]
        })
      }),
      collection: this.fb.group({
        firstname: ['', [ Validators.required ]],
        lastname: ['', [ Validators.required ]],
        birthdate: ['', [ Validators.required ]],
        email: ['', [ Validators.required ]],
        idType: ['', [ Validators.required ]],
        idNumber: ['', [ Validators.required ]]
      })
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
