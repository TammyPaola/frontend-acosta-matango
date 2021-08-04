import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '../models/models.index';
import { BookHttpService } from '../services/book-http.service';


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

  constructor(private bookHttpService: BookHttpService, private formBuilder: FormBuilder ) {
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
        date: [null, ],
        description: [null],
        published: [null],
        title: [null, [Validators.required, Validators.minLength(5)] ]
      }
    )
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

        this.selectedBook = response['data'];
      },

      error => {
        console.log(error)
      }
    );
  }
  
  createBook(): void {

    this.bookHttpService.create(this.selectedBook).subscribe(

      response => {
        console.log(response)
      },

      error => {
        console.log(error)
      }
    );
  }

  updateBook(book: BookModel): void {

    this.bookHttpService.update(book.id, book).subscribe(

      response => {
        console.log(response)
      },

      error => {
        console.log(error)
      }
    );
  }

  deleteBook(book: BookModel): void {

    this.bookHttpService.delete(book.id).subscribe(

      response => {
        console.log(response)
        this.removeBook(book);
      },

      error => {
        console.log(error)
      }
    );
  }

  removeBook(book: BookModel){
    this.books = this.books.filter(element => element.id !== book.id);
  }


  selectBook(book: BookModel) {
    console.log(book)
    this.formBook.patchValue(book)
  }

  onSubmit(){
    console.log('subido!')
  }

  get idField(){
    return this.formBook.controls['id']
  }
  get codeField(){
    return this.formBook.controls['code']
  }

}