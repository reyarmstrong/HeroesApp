import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  UrlSegment,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication()
      .pipe(
        tap(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['./auth/login']);
          }
        }
      )
    );
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    console.log('CanMatch');
    console.log({ route, segments });

    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log('CanActivate');
    console.log({ route, state });

    return this.checkAuthStatus();
  }

}
