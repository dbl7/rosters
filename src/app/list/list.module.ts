import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';

import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PhraseFormPageComponent } from './pages/phrase-form-page/phrase-form-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, ListRoutingModule, SharedModule, ReactiveFormsModule],
  declarations: [ListsPageComponent, ListPageComponent, PhraseFormPageComponent],
})
export class ListModule {}
