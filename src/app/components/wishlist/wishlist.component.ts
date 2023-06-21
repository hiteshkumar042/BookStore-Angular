import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlistservices/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {


  constructor( private wishlistService :WishlistService) { }
  ngOnInit(): void {
    this.getWishListItems()
  }
  wishlistCart :any[]=[]
  totalWishList:number=0
  allWishList:any

  getWishListItems() {
    this.wishlistService.getAllWishlistItemService().subscribe((res:any)=>{
      console.log(res.result)
      this.allWishList = res.result;
      this.wishlistCart = []
      this.allWishList.map((item:any)=>{
        if(item.product_id!=null){
          this.wishlistCart.push(item)
        }
      })
      //storing total wishlist count 
      this.totalWishList = this.wishlistCart.length
    })
  }

  removeFromWishlist(reqBody:any){
    this.wishlistService.removeFromWishlistService(reqBody).subscribe(data =>{
      console.log(data)
      this.getWishListItems()
    })
  }

}
