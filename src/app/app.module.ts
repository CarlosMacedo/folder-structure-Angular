import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@core/core.module';
import { MenuComponent, TitleComponent } from '@shared/components';

@NgModule({
  declarations: [AppComponent, MenuComponent, TitleComponent],
  imports: [AppRoutingModule, BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
