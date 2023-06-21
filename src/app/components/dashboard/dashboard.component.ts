import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartservices/cart.service';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService, private cartService: CartService) { }
  ngOnInit(): void {
    this.getcartItem()
  }


  TotalCartItem: number = 0
  showCart = true;

  getcartItem(){
    this.cartService.getCartBooks().subscribe((book:any) =>{
      console.log(book.result)
      for(let i=0; i<book.result.length; i++){
        this.TotalCartItem += book.result[i].quantityToBuy
      }
      console.log(this.TotalCartItem)
    })
  }

  //Sending searched query to data servivce
  searchBookQuery(event: any) {
    this.dataService.setSearchBook(event.target.value)
  }
  myCartPage() {
    this.router.navigateByUrl("/dashboard/mycart");
    this.dataService.cartQtycurrentData.subscribe(data => {
      this.TotalCartItem = data;
    })

  }
  homePage() {
    this.router.navigateByUrl("/dashboard/allbooks")
  }

}
