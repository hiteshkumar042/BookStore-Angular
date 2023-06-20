import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 constructor(private router:Router){}
 
  myCartPage(){
    this.router.navigateByUrl("/dashboard/mycart")
  }
  homePage(){
    this.router.navigateByUrl("/dashboard/allbooks")
  }
}
