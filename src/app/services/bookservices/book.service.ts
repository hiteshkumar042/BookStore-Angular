import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService:HttpService) { }
  token:any =localStorage.getItem('token');

  getAllBooksService(){
    let httpheadersOption = {
      headers :new HttpHeaders({
        contentType: 'application/json',
        authorization : this.token
      })
    }
    return this.httpService.getService('/get/book',httpheadersOption)
  }
}
