import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { bookmodel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {

  constructor(private httpClient: HttpClient) { 

  }

  getAll(){
    return this.httpClient.get('http://backendacosta-matango.test/api/v1/public/books/1/authors');
  }

  getOne(id: number) {
    const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors' + id;
    return this.httpClient.get(url);
  }

  create(book: bookmodel) {
    const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors';
    return this.httpClient.post(url, book);
  }

  update(id: number, book: bookmodel) {
    const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors' + id;
    return this.httpClient.put(url, book);
  }

  delete(id: number) {
    const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors' + id;
    return this.httpClient.delete(url);
  }
}