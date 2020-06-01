import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'rs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isAuthenticated$: Observable<boolean>;

  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.isAuthenticated$ = this.userService.isAuthenticated$();
  }
}
