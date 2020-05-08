import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from '@core/services/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this.userService
      .isAuthenticated$()
      .pipe(tap((isAuthenticated) => !isAuthenticated && this.router.navigate(['/auth'])));
  }
}
