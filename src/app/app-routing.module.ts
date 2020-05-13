import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/guards/auth/auth.guard';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: '', component: TrainingComponent, canActivate: [AuthGuard] },
  {
    path: 'lists',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
