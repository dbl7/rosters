import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'lists', loadChildren: () => import('./list/list.module').then((m) => m.ListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
