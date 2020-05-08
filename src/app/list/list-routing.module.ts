import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  { path: '', component: ListsPageComponent },
  { path: ':id', component: ListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ListRoutingModule {}
