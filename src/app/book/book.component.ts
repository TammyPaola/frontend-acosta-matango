import { Component, OnInit } from '@angular/core';
import { bookmodel } from '../models/book.model';
import { BookHttpService} from '../services/book-http.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  [x: string]: any;
  champion: bookmodel = {};
  champions: bookmodel[] = [];

  constructor(private bookHttpService: BookHttpService) {
  }
    ngOnInit() {
      this.getBooks();
      this.getBook();
    }
  
    getBooks(): void {
      this.bookHttpService.getAll().subscribe(
        response => {
          console.log(response);
          this.book = response['data'];
        },
        error => {
          console.log(error);
        }
      );
  
    }
  
    getBook(): void {
      this.bookHttpService.getOne(1).subscribe(
        response => {
          console.log(response);
          this.book = response['data'];
        },
        error => {
          console.log(error);
        }
      );
  
    }
  
    createBook(): void {
      this.bookHttpService.create(this.book).subscribe(
        response => {
          console.log(response);
          this.book = response['data'];
        },
        error => {
          console.log(error);
        }
      );
  
    }
  
    update(): void {
      this.bookHttpService.update(this.book.id, this.book).subscribe(
        response => {
          console.log(response);
          this.champion = response['data'];
        },
        error => {
          console.log(error);
        }
      );
  
    }
  
    deleteBook(): void {
      this.bookHttpService.delete(this.book.id).subscribe(
        response => {
          console.log(response);
          this.book = response['data'];
        },
        error => {
          console.log(error);
        }
      );
    }
  
  }