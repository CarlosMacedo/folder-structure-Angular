import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import * as arrayComponents from './components';

@NgModule({
  declarations: [MenuComponent, ...arrayComponents.components],
  imports: [CommonModule],
  exports: [...arrayComponents.components],
})
export class SharedModule {}
