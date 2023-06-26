import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdmindisplaybookComponent } from '../admindisplaybook/admindisplaybook.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/adminservices/admin.service';
import { BookService } from 'src/app/services/bookservices/book.service';

@Component({
  selector: 'app-admindialogbox',
  templateUrl: './admindialogbox.component.html',
  styleUrls: ['./admindialogbox.component.scss']
})
export class AdmindialogboxComponent implements OnInit {
  bookForm!: FormGroup;
  addOperation = true;
  showAddBook=true

  @Output() dialogClosed = new EventEmitter<any>()

  constructor(
    public dialogRef: MatDialogRef<AdmindisplaybookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder:FormBuilder,
    private adminService:AdminService,private bookService:BookService
    
  ) { }

  ngOnInit() {
    if (!this.data) {
      this.bookForm = this.formBuilder.group({
        bookName: ['', [Validators.required]],
        author: ['', [Validators.required]],
        description: [''],
        quantity: ['', [Validators.required]],
        price: ['', [Validators.required]],
        discountPrice: ['', [Validators.required]],
      }) 
    } else {
      //for update operation
      this.showAddBook=false
      this.addOperation=false;
      console.log(this.data)
      this.bookForm = new FormGroup({
        bookName: new FormControl(),
        author: new FormControl(),
        description: new FormControl(),
        quantity: new FormControl(),
        price: new FormControl(),
        discountPrice: new FormControl(),
      });
      //Patch Values
      this.bookForm.patchValue({
        bookName: this.data.bookName,
        author: this.data.author,
        description: this.data.description,
        quantity: this.data.quantity,
        price: this.data.price,
        discountPrice: this.data.discountPrice,
      });
      

    }

  }

  saveBook(){
    let reqData = {
      bookName: this.bookForm.value.bookName,
        author: this.bookForm.value.author,
        description: this.bookForm.value.description,
        quantity: this.bookForm.value.quantity,
        price: this.bookForm.value.price,
        discountPrice: this.bookForm.value.discountPrice,
    }
    if(this.bookForm.valid){
      if(this.addOperation){
        //Add opration Api
        this.adminService.addBookAdminService(reqData).subscribe(data =>{
          console.log(data)
          this.dialogRef.close(data);
          
        })
      }
      else{
        //Update Operation API
        this.adminService.updateAdminBookService(this.data._id,reqData).subscribe(data =>{
          console.log(data);
          this.dialogRef.close(data);
        })
      }
    }
  }
}


