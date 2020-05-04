import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists/lists.component';
import { ListRoutingModule } from './list-routing.module';

@NgModule({
  imports: [CommonModule, ListRoutingModule],
  declarations: [ListsComponent],
})
export class ListModule {}
