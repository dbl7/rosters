import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from '@core/services/user/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this.userService
      .isAuthenticated$()
      .pipe(tap((isAuthenticated) => !isAuthenticated && this.router.navigate(['/auth'])));
  }

  public canLoad(): Observable<boolean> {
    return this.userService.isAuthenticated$().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/auth']);
        }
      }),
    );
  }
}
