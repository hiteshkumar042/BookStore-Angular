import { Component } from '@angular/core';
import { BookService } from 'src/app/services/bookservices/book.service';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.scss']
})
export class AllbooksComponent {
  constructor( private bookService:BookService,private dataService:DataService){}
  allBooksArray: any[] = [];
  ngOnInit() {
    this.getallBooks()
  }

  getallBooks(){
    this.bookService.getAllBooksService().subscribe((books:any) =>{
      this.allBooksArray = books.result;
      
      if(this.getallBooks===null){
        this.getallBooks()
      }
    })
  }
}