import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TrainingPageComponent } from './pages';

@NgModule({
  declarations: [TrainingPageComponent],
  imports: [CommonModule, RouterModule],
  exports: [TrainingPageComponent],
})
export class TrainingModule {}
