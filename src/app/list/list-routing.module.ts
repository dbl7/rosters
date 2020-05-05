import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';

const routes: Routes = [{ path: '', component: ListsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ListRoutingModule {}
