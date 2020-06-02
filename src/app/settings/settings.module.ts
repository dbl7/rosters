import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
