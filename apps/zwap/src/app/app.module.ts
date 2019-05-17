import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { MatToolbarModule } from '@angular/material/toolbar';

import { CoreAuthenticationModule } from '@zwap/core/authentication';
import { StaticPagesModule } from '@zwap/static-pages';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,

    MatToolbarModule,

    CoreAuthenticationModule,
    FeaturesModule,
    StaticPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
