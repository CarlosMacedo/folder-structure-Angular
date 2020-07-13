import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@core/core.module';

import { HomePageModule } from './_features/_home-page/_home-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule, HomePageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
