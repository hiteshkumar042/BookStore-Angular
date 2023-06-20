import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartservices/cart.service';
import { CustomerService } from 'src/app/services/customerservice/customer.service';
import { DataService } from 'src/app/services/dataservices/data.service';
import { OrderService } from 'src/app/services/orderservice/order.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService,
    private CustomerService: CustomerService,
    private dataService: DataService, private formBuilder: FormBuilder,
    private orderService:OrderService) { }
  cartItems: any[] = [];
  qtyToBuy: number = 1;
  totalQtyToBuy: number = 0
  totalAmount: number = 0;
  AddressDataForm!: FormGroup;
  selectedRadio: any
  //FormErros
  nameError = ""
  mobileError = ""
  AddressError = ""
  cityError = ""
  stateError = ""

  ngOnInit() {
    this.getCartBooks();
    this.AddressDataForm = this.formBuilder.group({
      addressType: new FormControl([], Validators.required),
      fullName: ["", [Validators.required, Validators.minLength(6)]],
      mobileNumber: ["", [Validators.required]],
      fullAddress: ["", [Validators.required, Validators.minLength(10)]],
      city: ["", [Validators.required, Validators.minLength(3)]],
      state: ["", [Validators.required, Validators.minLength(4)]],

    })
  }
  showAddressForm = false;
  ShowOrderSumm = false;
  placeOrderBtn = true;
  continueBtn = true;
  showMycart = false;

  placeOrder() {
    this.showAddressForm = true;
    this.placeOrderBtn = false;
  }
  dashBoard() {
    this.router.navigateByUrl("/dashboard")

  }
  continueClick() {
    if (this.AddressDataForm.valid) {
      this.continueBtn = false;
      this.ShowOrderSumm = true;

      let reqBody = {
        addressType: this.AddressDataForm.value.addressType,
        fullAddress: this.AddressDataForm.value.fullAddress,
        city: this.AddressDataForm.value.city,
        state: this.AddressDataForm.value.state,
      }
      console.log(reqBody)
      this.CustomerService.updateCustomerDetails(reqBody).subscribe(data => {
        console.log(data)

      })
    }
    else {
      this.nameError = "Enter full name"
      this.mobileError = "Enter mobile number"
      this.AddressError = "Enter full address"
      this.cityError = "Enter city name"
      this.stateError = "Enter state name"
      return
    }

  }

  //on clicm of checkout 

  checkout() {
    console.log(this.cartItems)
    let reqBody = {
      "orders": this.cartItems.map(order => ({
        product_id: order.product_id._id,
        product_name: order.product_id.bookName, 
        product_quantity: order.quantityToBuy,
        product_price: order.product_id.discountPrice
      }))
    }
    this.orderService.AddOrdersService(reqBody).subscribe(response=>{
      console.log(response)
      this.router.navigateByUrl('dashboard/order-confirmation')
    })
  }

  getCartBooks() {
    this.cartService.getCartBooks().subscribe((data: any) => {

      if (data.result.length < 1) {
        this.showMycart = false
      }
      else {
        this.showMycart = true;
        this.cartItems = data.result;
        console.log(this.cartItems)
        this.totalQtyToBuy = 0
        this.totalAmount = 0
        //to get the total qty
        for (let i = 0; i < this.cartItems.length; i++) {
          this.totalQtyToBuy += this.cartItems[i].quantityToBuy;
        }
        //to get total Amount
        console.log(this.cartItems)
        for (let i = 0; i < this.cartItems.length; i++) {
          this.totalAmount += this.cartItems[i].quantityToBuy * this.cartItems[i].product_id.discountPrice;
        }
        console.log(this.totalAmount)
        //send total cart item to data service
        this.sendCartQtyData()

      }
    })
  }

  removeCartItem(id: string) {
    this.cartService.deleteFromCart(id).subscribe((data => {
      console.log(data);
      this.getCartBooks();
      this.showMycart = false;
    }))
  }

  IncreaseQty(id: string, quantityToBuy: number) {
    let reqBody = {
      quantityToBuy: quantityToBuy + 1
    }
    this.cartService.updateCart(id, reqBody).subscribe((data => {
      this.getCartBooks()
      console.log(data)
    }))
  }

  DecreaseQty(id: string, quantityToBuy: number) {
    let reqBody = {
      quantityToBuy: quantityToBuy - 1
    }
    this.cartService.updateCart(id, reqBody).subscribe((data => {
      this.getCartBooks()
      console.log(data)
    }))
  }

  sendCartQtyData() {
    this.dataService.setCartQtyData(this.totalQtyToBuy)
  }



}
