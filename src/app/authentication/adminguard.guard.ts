import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class adminguardGuard implements CanActivate{
  token = localStorage.getItem("token")
  
  constructor(private router:Router){}
  canActivate(): boolean {
    if(!this.token){
      this.router.navigateByUrl("/login")
      return false
    }
    return true;
  }
  
};
