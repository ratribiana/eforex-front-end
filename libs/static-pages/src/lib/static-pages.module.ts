import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  declarations: [AboutComponent, ContactComponent, NotFoundComponent],
  exports: [ RouterModule ]
})
export class StaticPagesModule {}
