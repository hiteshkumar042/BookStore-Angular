import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/adminservices/admin.service';
import { BookService } from 'src/app/services/bookservices/book.service';
import { AdmindialogboxComponent } from '../admindialogbox/admindialogbox.component';

@Component({
  selector: 'app-admindisplaybook',
  templateUrl: './admindisplaybook.component.html',
  styleUrls: ['./admindisplaybook.component.scss']
})
export class AdmindisplaybookComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['image', 'bookName', 'author','description', 'price', 'discountPrice', 'quantity', 'actions'];
  allBooks=[]
  bookCount=0

  ngOnInit(){
    this.getAllBooks()
  }

  constructor(private bookservice:BookService,private adminService:AdminService,private snackbar:MatSnackBar,public dialog: MatDialog){}
  //Mat dialog box
  openDialog(element?:any){
    const dialogRef = this.dialog.open(AdmindialogboxComponent,{data:element})

    dialogRef.afterClosed().subscribe(() =>{
      this.getAllBooks()
    })
  }



  //get all books from server
  getAllBooks(){
    this.bookservice.getAllBooksService().subscribe((books:any) =>{
      this.allBooks=books.result
      this.bookCount=books.result.length
      console.log(this.allBooks)
    })
  }
  //Delete Action
  deleteAdminBook(reqbody:any){
      this.adminService.deleteAdminBookService(reqbody).subscribe(res =>{
        console.log(res)
        this.snackbar.open("Book Deleted Successfully", "Ok",{duration:3000})
        this.getAllBooks()
      })
  }

}
