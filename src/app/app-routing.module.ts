import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/guards/auth/auth.guard';
import { TrainingPageComponent } from './training/pages/training-page/training-page.component';

const routes: Routes = [
  { path: '', component: TrainingPageComponent, canActivate: [AuthGuard] },
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
