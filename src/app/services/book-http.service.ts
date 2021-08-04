 import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {

  constructor(private httpClient: HttpClient) {



  }

  getAll() {
    return this.httpClient.get('http://backendacosta-matango.test/api/v1/private/books');
  }


  getOne(id: number) {

    const url = 'http://backendacosta-matango.test/api/v1/private/books/' + id;

    return this.httpClient.get(url);
  }

  create(book: BookModel) {

    const url = 'http://backendacosta-matango.test/api/v1/public/books' ;

    return this.httpClient.post(url, book);
  }


  update(id: number, book: BookModel) {

    const url = 'http://backendacosta-matango.test/api/v1/private/books/' + id;

    return this.httpClient.put(url, book);
  }


  delete(id: number) {

    const url = 'http://backendacosta-matango.test/api/v1/public/books/21' + id;

    return this.httpClient.delete(url);
  }


}