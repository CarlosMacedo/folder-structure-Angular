import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
})
export class SharedModule {}
