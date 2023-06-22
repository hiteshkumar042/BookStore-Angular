import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private DataSource = new BehaviorSubject([])
  currentData = this.DataSource.asObservable()

  setData(data:any){
    this.DataSource.next(data)
  }
  
  private cartQtySource = new BehaviorSubject(0)
  cartQtycurrentData = this.cartQtySource.asObservable()

  setCartQtyData(data:any){
    this.cartQtySource.next(data)
  }

  private bookSearchSource = new BehaviorSubject("")
  currentbookSearch = this.bookSearchSource.asObservable()

  setSearchBook(data:any){
    this.bookSearchSource.next(data)
  }

  getToken(){
    return localStorage.getItem("token")
  }

}
