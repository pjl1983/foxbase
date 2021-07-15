import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DecisionTree } from '../decision-tree';

@Injectable({
  providedIn: 'root'
})
export class DecisionTreeGuardService implements CanActivate {


  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (DecisionTree.some(value => value.id === next.params.id)) {
      return true;
    }

    this.router.navigate(['decision-tree', 1]);
    return false;
  }
}
