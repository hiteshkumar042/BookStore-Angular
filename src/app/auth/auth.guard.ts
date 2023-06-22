import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { DataService } from '../services/dataservices/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {
  constructor(private router:Router,private dataService:DataService){}
  token=this.dataService.getToken()
  canActivate(): boolean {
    if(!this.token){
      this.router.navigateByUrl("/login")
      return false
    }
    
      return true
    
  }
};


// canActivate():boolean{
//   let token:any = this.tokenService.getToken();
//   console.log(token)
//   if(!token){
//     this.router.navigateByUrl('/login')
//     return false
//   }
//   return true
// }
// };