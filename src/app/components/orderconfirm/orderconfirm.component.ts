import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.scss']
})
export class OrderconfirmComponent {
  constructor(private router:Router){}

  dashboard(){
    this.router.navigateByUrl("/dashboard/allbooks")
  }
}
