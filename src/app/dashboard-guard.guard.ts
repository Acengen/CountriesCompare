import { MyServiceService } from './my-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuardGuard implements CanActivate {
  constructor(private service: MyServiceService, private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.service.isActive){
      return true;
    }else{
      return this.router.navigate(["/form-page"]);
    }
  }
  
}
