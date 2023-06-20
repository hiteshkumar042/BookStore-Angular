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
  


}
