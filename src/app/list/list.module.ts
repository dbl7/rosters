import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';

import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
  imports: [CommonModule, ListRoutingModule],
  declarations: [ListsPageComponent, ListPageComponent],
})
export class ListModule {}
