import { Injectable } from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import { SubscribeService } from "../services/subscribe/subscribe.service";

@Injectable()
export class RouterGuard implements CanActivate {
  constructor(private __SubscribeService: SubscribeService, private router: Router){}
  canActivate(){
    if(this.__SubscribeService.subscribedUser){
      return true
    }
    this.router.navigateByUrl('subscribe')
    return false
  }
}
