import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  singleBookDetails: any; 

  private DataSource = new BehaviorSubject([])
  currentData = this.DataSource.asObservable()

  setData(data:any){
    this.DataSource.next(data)
  }
  
  private cartinfoNum = new BehaviorSubject([]);
  cartMessage = this.cartinfoNum.asObservable();

  sendCartNo(message: any) {
    this.cartinfoNum.next(message)
  }


}
