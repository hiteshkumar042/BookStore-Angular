import { Injectable } from '@angular/core';
import {HttpService} from '../httpservices/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  loginService(reqdata: any) {

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        // authorization: this.token
      })
    }
    return this.httpService.postService('/login', reqdata, httpHeadersOption)
  }

  signupService(reqdata: any){
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        // authorization: this.token
      })
    }
    return this.httpService.postService('/registration', reqdata, httpHeadersOption)
  }
}
