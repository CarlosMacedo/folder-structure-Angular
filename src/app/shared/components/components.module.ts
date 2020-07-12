import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as arrayComponents from './';

@NgModule({
  declarations: [...arrayComponents.components],
  imports: [CommonModule],
  exports: [...arrayComponents.components],
})
export class ComponentsModule {}
