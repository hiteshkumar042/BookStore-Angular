import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }
  BaseUrl = "https://bookstore.incubation.bridgelabz.com/bookstore_user"
  
  postService(url:string,reqBody:any,reqHeaders:any){
    return this.httpClient.post(this.BaseUrl+url,reqBody,reqHeaders)
  }

}
