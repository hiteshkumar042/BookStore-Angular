import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private httpService:HttpService) { }
  token:any
  //admin login
  adminLoginService(reqBody:any){
    let httpHeadersOption = {
      headers : new HttpHeaders({
        contentType:'application/json',
      })
    }
    return this.httpService.postService('/admin/login',reqBody,httpHeadersOption)
  }


//Admin SignUp
  adminSignUpService(reqBody:any){
    let httpHeadersOption = {
      headers : new HttpHeaders({
        contentType:'application/json',
      })
    }
    return this.httpService.postService('/admin/registration',reqBody,httpHeadersOption)
  }


  //delete bookservice

  deleteAdminBookService(reqBody:any) {
    this.token = localStorage.getItem('token');
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService('/admin/delete/book/'+reqBody,httpHeadersOption)
  }

  //Add book Service

  addBookAdminService(reqBody:any){
    this.token = localStorage.getItem('token');
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/admin/add/book/',reqBody,httpHeadersOption)
  }

  //Update Book service

  updateAdminBookService(id:any,reqBody:any){
    this.token = localStorage.getItem('token');
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.updateService('/admin/update/book/'+id,reqBody,httpHeadersOption)
  }
}
