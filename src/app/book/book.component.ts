import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/models.index';
import { BookHttpService } from '../services/book-http.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],

})
export class BookComponent implements OnInit {

  book: BookModel = {};

  //array de libros

  books: BookModel[] = [];


  constructor(private bookHttpService: BookHttpService) {



  }
  ngOnInit() {  //es como el useEfect de React
    this.getBooks();
    this.getBook();
  }

  getBooks(): void {

    this.bookHttpService.getAll().subscribe(

      response => {

        this.books = response['data'] as BookModel[];
      },

      error => {
        console.log(error)
      }
    );
  }
  getBook(): void {
    const id = 1;
    this.bookHttpService.getOne(id).subscribe(

      response => {

        this.book = response['data'];
      },

      error => {
        console.log(error)
      }
    );
  }
  
  createBook(): void {

    this.bookHttpService.create(this.book).subscribe(

      response => {
        console.log(response)
      },

      error => {
        console.log(error)
      }
    );
  }

  updateBook(): void {

    this.bookHttpService.update(this.book.id, this.book).subscribe(

      response => {
        console.log(response)
      },

      error => {
        console.log(error)
      }
    );
  }

  deleteBook(): void {

    this.bookHttpService.delete(this.book.id).subscribe(

      response => {
        console.log(response)
      },

      error => {
        console.log(error)
      }
    );
  }


}