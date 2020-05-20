import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { TrainingPageComponent } from './pages';
import { PhraseReviewerComponent } from './components/phrase-reviewer/phrase-reviewer.component';

@NgModule({
  declarations: [TrainingPageComponent, PhraseReviewerComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [TrainingPageComponent],
})
export class TrainingModule {}
