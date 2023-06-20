import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservices/book.service';
import { DataService } from 'src/app/services/dataservices/data.service';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styleUrls: ['./displaybook.component.scss']
})
export class DisplaybookComponent implements OnInit {
  constructor(private bookService:BookService,private dataService:DataService,private router:Router){}
  booksCount:number=0
  ngOnInit(): void {
  this.Searchbook()
  }
  Searchbookdetails:any
  Searchbook(){
    this.dataService.currentbookSearch.subscribe(query=>{
      this.Searchbookdetails=query;
    })
  }

  hoveredIndex=""
  @Input() BookObj:any
  
 
  bookToDataService(book:any){
    this.dataService.setData(book);
    this.router.navigateByUrl('dashboard/bookdetails')
  }
  
  
  
  
  
  // getAllBooks(){
  //   this.bookService.getAllBooksService().subscribe((books:any) =>{
  //    this.booksCount=books.result.length;
  //    console.log(books)
  //   })
  // }
}
