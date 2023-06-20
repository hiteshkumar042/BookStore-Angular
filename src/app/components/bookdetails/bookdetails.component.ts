import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservices/data.service';
import { CartService } from '../../services/cartservices/cart.service'
import { WishlistService } from 'src/app/services/wishlistservices/wishlist.service';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent implements OnInit {
  show = true;
  qtyToBuy: any = 1;
  currentCartArray: any[] = [];
  CArray = [1, 2]
  constructor(private dataService: DataService, private router: Router,
    private cartService: CartService, private wishlistService: WishlistService) { }
  bookInfo: any
  bookId: any
  cartItemId: any
  ngOnInit() {
    this.getBookdetails()
    this.getcartBook()
  }


  getBookdetails() {
    this.dataService.currentData.subscribe((data) => {
      this.bookInfo = data;
      this.bookId = this.bookInfo?._id;
      console.log("Clicked Book Id", this.bookId);

      //if the book id is undefiened it will redirect to dashboard page again
      if (this.bookId === undefined) {
        this.router.navigateByUrl("dashboard/allbooks")
      }
    }).unsubscribe()
  }

  home() {
    this.router.navigateByUrl('/dashboard');
  }



  AddToCart() {
    this.show = false;
    console.log(this.bookId);
    this.cartService.cartAddBooks(this.bookId).subscribe((result: any) => {
      console.log("added in cart", result);
      this.getcartBook()
    })
  }

  decreaseQty() {
    this.qtyToBuy = this.qtyToBuy - 1;
    let reqBody = {
      "quantityToBuy": this.qtyToBuy
    }
    this.cartService.updateCart(this.cartItemId, reqBody).subscribe((result: any) => {
      console.log(result)
    })
  }

  increaseQty() {
    this.qtyToBuy = this.qtyToBuy + 1;
    let reqBody = {
      "quantityToBuy": this.qtyToBuy
    }
    this.cartService.updateCart(this.cartItemId, reqBody).subscribe((result: any) => {
      console.log(result)
    })
  }

  AddToWhishlist() {
    this.wishlistService.AddWishListService(this.bookId).subscribe((result: any) => {
      console.log(result);
    })
  }


  getcartBook() {
    this.cartService.getCartBooks().subscribe((result: any) => {
      // this.cartitemNo = result.result.length;
      // this.dataService.setData(this.cartitemNo);
      // console.log(result)
      this.currentCartArray = result.result.map((item: any) => {
        if (item.product_id._id === this.bookId) {
          this.currentCartArray = item;
          this.cartItemId = item._id
          this.qtyToBuy = item.quantityToBuy;
          if (this.qtyToBuy >= 1) {
            this.show = false
          }
          console.log(this.currentCartArray, this.qtyToBuy)

        }
      }
      )
    })
  }
}

