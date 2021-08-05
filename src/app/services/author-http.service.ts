import { AuthorModel } from '../models/author.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ServerResponse} from '../models/server-response';
import {Handler} from '../exceptions/handler';
import {environment} from '../../environments/environment';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorHttpService {

  constructor(private httpClient: HttpClient) { }

  //apis for windows

  // getAll() {
  //   const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors'
  //   return this.httpClient.get(url)
  // }

  // geteOne(id: number) {
  //   const url = 'http://backendacosta-matango.test/api/v1/public/books/5/authors/' + id
  //   return this.httpClient.get(url)
  // }

  // create(author: AuthorModel){
  //   const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors'
  //   return this.httpClient.post(url, author);
  // }

  // update(id: number, author: AuthorModel){
  //   const url = 'http://backendacosta-matango.test/api/v1/public/books/1/authors/' + id
  //   return this.httpClient.put(url, author);
  // }

  // delete(id: number) {
  //   const url = 'http://backendacosta-matango.test/api/v1/public/books/5/authors/' + id

  //   return this.httpClient.delete(url)
  // }

    //apis for Linux

  getAll(): Observable<ServerResponse>{
    const url = 'http://localhost:8000/api/v1/public/books/1/authors'
    return this.httpClient.get<ServerResponse>(url)
  }

  geteOne(id: number | undefined) : Observable<ServerResponse>{
    const url = 'http://localhost:8000/api/v1/public/books/5/authors/' + id
    return this.httpClient.get<ServerResponse>(url)
  }

  create(author: AuthorModel) : Observable<ServerResponse>{
    const url = 'http://localhost:8000/api/v1/public/books/1/authors'
    return this.httpClient.post<ServerResponse>(url, author);
  }

  update(id: number| undefined, author: AuthorModel | undefined) : Observable<ServerResponse>{
    const url = 'http://localhost:8000/api/v1/public/books/1/authors/' + id
    return this.httpClient.put<ServerResponse>(url, author);
  }

  delete(id: number | undefined)  : Observable<ServerResponse>{
    const url = 'http://localhost:8000/api/v1/public/books/5/authors/' + id

    return this.httpClient.delete<ServerResponse>(url)
  }

}

