import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (window.location.pathname === '' || window.location.pathname === '/') {
        this.router.navigateByUrl('/principal');
    } else {
        return true;
    }
  }
  
}
