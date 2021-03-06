import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PhraseFormPageComponent } from './pages/phrase-form-page/phrase-form-page.component';

const routes: Routes = [
  { path: '', component: ListsPageComponent },
  {
    path: ':id',
    component: ListPageComponent,
  },
  {
    path: ':id/add',
    component: PhraseFormPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
