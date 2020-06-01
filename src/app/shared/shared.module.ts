import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from './material/app-material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppMaterialModule, FlexLayoutModule],
  exports: [AppMaterialModule, FlexLayoutModule],
})
export class SharedModule {}
