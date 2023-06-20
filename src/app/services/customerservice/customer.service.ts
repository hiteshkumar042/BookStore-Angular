import { Injectable } from '@angular/core';
import {HttpService} from '../httpservices/http.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private HttpService:HttpService) { }
  token:any
  updateCustomerDetails(reqBody:any){
     this.token = localStorage.getItem('token');
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    } 
    return this.HttpService.updateService("/edit_user",reqBody,httpHeadersOption)
  }
}
