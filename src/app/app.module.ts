import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeaturesComponent } from './features/features.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, FeaturesComponent, ContactComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
