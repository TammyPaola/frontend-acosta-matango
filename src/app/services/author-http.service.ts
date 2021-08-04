import { AuthorModel } from '../models/author.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpService {

  constructor(private httpClient: HttpClient) { }


  getAll() {
    const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors'
    return this.httpClient.get(url)
  }

  geteOne(id: number) {
    const url = 'http://backendacosta-matango.test/api/v1/public/books/5/authors/' + id
    return this.httpClient.get(url)
  }

  create(author: AuthorModel){
    const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors'
    return this.httpClient.post(url, author);
  }

  update(id: number, author: AuthorModel){
    const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors/' + id
    return this.httpClient.put(url, author);
  }

  delete(id: number) {
    const url = 'http://backendacosta-matango.test/api/v1/public/books/5/authors/' + id

    return this.httpClient.delete(url)
  }

}

