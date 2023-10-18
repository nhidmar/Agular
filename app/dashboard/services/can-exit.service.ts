import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../home/home.component';

export interface CanComponentDeactivate{
  canDeactivate : ()  => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanExitService implements CanDeactivate<CanComponentDeactivate>{

  constructor() { }

  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canDeactivate ? component.canDeactivate() : true
  }
}
