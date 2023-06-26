import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent {
  constructor(private router:Router){}
  logoutAdmin(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }
}
