import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as arrayComponents from './';

import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [...arrayComponents.components],
  imports: [CommonModule, MatRippleModule],
  exports: [...arrayComponents.components, MatRippleModule],
})
export class ComponentsModule {}
