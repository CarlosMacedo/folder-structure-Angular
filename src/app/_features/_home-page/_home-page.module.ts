import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent, TitleComponent } from '@shared/components';

@NgModule({
  declarations: [MenuComponent, TitleComponent],
  imports: [CommonModule],
  exports: [MenuComponent, TitleComponent],
})
export class HomePageModule {}
