import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arrayComponents from './index';

@NgModule({
  declarations: [...arrayComponents.components],
  imports: [CommonModule],
  exports: [...arrayComponents.components],
})
export class SharedModule {}
