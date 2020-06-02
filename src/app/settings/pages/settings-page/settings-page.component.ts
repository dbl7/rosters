import { Component, ChangeDetectionStrategy } from '@angular/core';

import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'rs-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent {
  constructor(private authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
}
