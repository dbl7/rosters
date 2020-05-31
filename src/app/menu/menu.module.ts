import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ListSwitchComponent } from './components/list-switch/list-switch.component';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent, ListSwitchComponent],
  imports: [CommonModule, SharedModule],
  exports: [MenuComponent],
})
export class MenuModule {}
