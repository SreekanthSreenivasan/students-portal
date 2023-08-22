import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.http.isAuthSuccess.getValue()) {
      debugger;
      return true; // User is authenticated, allow access to the route
    } else {
      debugger;
      // User is not authenticated, navigate to a login page or show a message
      this.router.navigate(['']); // Change '/login' to your actual login route
      return false;
    }
  }
}
