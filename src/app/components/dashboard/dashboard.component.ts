import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 constructor(private router:Router,private dataService:DataService){}
  
 TotalCartItem : number=0
 showCart=false;
 
 //Sending searched query to data servivce
 searchBookQuery(event:any){
  this.dataService.setSearchBook(event.target.value)
 }
  myCartPage(){
    this.router.navigateByUrl("/dashboard/mycart");
    this.dataService.cartQtycurrentData.subscribe(data=>{
      this.TotalCartItem=data;
      this.showCart=true
    })

  }
  homePage(){
    this.router.navigateByUrl("/dashboard/allbooks")
    this.showCart=false
  }
 
}
