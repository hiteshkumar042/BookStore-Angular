import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartservices/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  constructor(private router: Router, private cartService:CartService) { }
  cartItems:any[]=[];
  qtyToBuy:number=1
  ngOnInit() {
    this.getCartBooks();
  }
  showAddressForm = false;
  ShowOrderSumm=false;
  placeOrderBtn = true;
  continueBtn=true;
  showMycart=false;
  CartCountArray:any[]=[]
  totalItemInCarts=0
  placeOrder() {
    this.showAddressForm = true;
    this.placeOrderBtn = false;
  }
  dashBoard() {
    this.router.navigateByUrl("/dashboard")
  }
  continueClick(){
    this.continueBtn=false;
   this. ShowOrderSumm = true;
  }
  getCartBooks(){
    this.cartService.getCartBooks().subscribe((data:any) =>{
      this.cartItems = data.result;
      if(this.cartItems.length<1){
        this.showMycart=false
      }
      else{
        this.showMycart=true;
      }
    })
  }

  removeCartItem(id:string){
    this.cartService.deleteFromCart(id).subscribe((data=>{
      console.log(data);
      this.getCartBooks();
      this.showMycart=false;
    }))
  }

  IncreaseQty(id:string,quantityToBuy:number){
    let reqBody={
      quantityToBuy: quantityToBuy+1
    }
    this.cartService.updateCart(id,reqBody).subscribe((data=>{
      this.getCartBooks()
      console.log(data)
    }))
  }

  DecreaseQty(id:string,quantityToBuy:number){
    let reqBody={
      quantityToBuy: quantityToBuy-1
    }
    this.cartService.updateCart(id,reqBody).subscribe((data=>{
      this.getCartBooks()
      console.log(data)
    }))
  }


}
