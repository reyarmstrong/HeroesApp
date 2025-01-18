import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  UrlSegment,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {

  constructor() { }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    console.log('CanMatch');
    console.log({ route, segments });

    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log('CanActivate');
    console.log({ route, state });

    return false;
  }

}
