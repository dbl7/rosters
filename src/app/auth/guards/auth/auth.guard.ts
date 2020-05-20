import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, first } from 'rxjs/operators';

import { UserService } from '@core/services/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  public canActivate(): Observable<boolean> {
    return this.isAuthenticated$();
  }

  public canLoad(): Observable<boolean> {
    return this.isAuthenticated$().pipe(first());
  }

  private isAuthenticated$(): Observable<boolean> {
    return this.userService
      .isAuthenticated$()
      .pipe(tap((isAuthenticated) => !isAuthenticated && this.router.navigate(['/auth'])));
  }
}
