import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpService:HttpService) { }
  token:any
  
  AddWishListService(reqBody:any){
   this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/add_wish_list/' + reqBody, {}, httpHeadersOption)
  }
}
