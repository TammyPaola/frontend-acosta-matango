import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '../models/index';
import { BookHttpService } from '../services/book-http.service';
import { MessageService } from '../services/message.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],

})
export class BookComponent implements OnInit {

  selectedBook: BookModel = {};

  //array de libros

  books: BookModel[] = [];

  formBook: FormGroup;
  themes: any;

  constructor(
    private bookHttpService: BookHttpService,
    private formBuilder: FormBuilder,
    public messageService: MessageService,
    private appService: AppService
    ) {

    this.formBook = this.newFormBook();


  }
  ngOnInit() {  //es como el useEfect de React
    this.getBooks();
    this.getBook();
  }

  //estructura sencilla de un formulario

  newFormBook(): FormGroup {
    return this.formBuilder.group(
      {
        id: [null],
        code: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(3)]],
        date: [null,  [Validators.required]],
        description: [null, [Validators.required]],
        published: [null],
        title: [null, [Validators.required]]
      }
    )
  }




  getBooks(): void {

    this.bookHttpService.getAll().subscribe(

      response => {

        this.books = response.data;
        this.messageService.success(response);
      },

      error => {
        this.messageService.error(error);
      }
    );
  }
  getBook(): void {
    const id = 1;
    this.bookHttpService.getOne(id).subscribe(

      response => {

        this.selectedBook = response.data
        this.messageService.success(response);
      },

      error => {
        this.messageService.error(error);
      }
    );
  }

  storeBook(book: BookModel): void {

    this.bookHttpService.store(book).subscribe(

      response => {
        this.saveBook(response.data)
        this.messageService.success(response)
      },

      error => {
        this.messageService.error(error);
      }
    );
  }

  updateBook(book: BookModel): void {

    this.bookHttpService.update(book.id, book).subscribe(

      response => {
        this.saveBook(book)
        this.messageService.success(response)
      },

      error => {
        this.messageService.error(error);
      }
    );
  }

  deleteBook(book: BookModel): void {

    this.bookHttpService.delete(book.id).subscribe(

      response => {
        this.removeBook(book);
        this.messageService.success(response)
      },

      error => {
        this.messageService.error(error);
      }
    );
  }

  removeBook(book: BookModel) {
    this.books = this.books.filter(element => element.id !== book.id);
  }


  selectBook(book: BookModel) {
    console.log(book)
    this.formBook.patchValue(book)
  }

  saveBook(book: BookModel) {
    const index = this.books.findIndex(element => element.id === book.id);
    if (index === -1) {
      this.books.push(book);
    } else {
      this.books[index] = book;
    }
  }

  onSubmit(book: BookModel) {
    if (this.formBook.valid) {
      if (book.id) {
        this.updateBook(book);
        
      } else {
        this.storeBook(book);
      }
      this.formBook.reset();
    } else {
      this.formBook.markAllAsTouched();
    }
  }

  get idField() {
    return this.formBook.controls['id']
  }
  get codeField() {
    return this.formBook.controls['code']
  }
  get dateField() {
    return this.formBook.controls['date']
  }
  get descriptionField() {
    return this.formBook.controls['description']
  }
  get publishedFeld() {
    return this.formBook.controls['published']
  }
  get titleField() {
    return this.formBook.controls['title']
  }

}