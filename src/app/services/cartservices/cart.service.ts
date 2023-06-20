import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;
  constructor(private httpService: HttpService) { }


  getCartBooks() {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService("/get_cart_items", httpHeadersOption)
  }
  

  cartAddBooks(reqdata: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/add_cart_item/'+ reqdata,{}, httpHeadersOption)
  }



  updateCart(Id:any,reqBody:any){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.updateService('/cart_item_quantity/'+Id , reqBody, httpHeadersOption)
  }

  deleteFromCart(Id:any){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
   return this.httpService.deleteService('/remove_cart_item/'+Id,httpHeadersOption)
  }
}
