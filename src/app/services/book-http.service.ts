import { BookModel } from '../models/book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServerResponse } from '../models/server-response';
import { Handler } from '../exceptions/handler';
import { environment } from '../../environments/environment';
import { MessageService } from './message.service';

// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {
  API_URL_PRIVATE: string = environment.API_URL_PRIVATE;
  API_URL_PUBLIC: string = environment.API_URL_PUBLIC;

  constructor(private httpClient: HttpClient, ) {



  }
  //api for windows

  getAll(): Observable<ServerResponse> {
    const url = this.API_URL_PRIVATE + '/books';
    return this.httpClient.get<ServerResponse>(url)
      .pipe(
        map(response => response),
        catchError(Handler.render)
      );
  }


  getOne(id: number | undefined): Observable<ServerResponse> {

    const url = this.API_URL_PRIVATE + '/books/' + id;

    // const url = 'http://backendacosta-matango.test/api/v1/private/books/' + id;

    return this.httpClient.get<ServerResponse>(url)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }

  store(book: BookModel | undefined): Observable<ServerResponse> {

    const url = this.API_URL_PRIVATE + '/books';

    // const url = 'http://backendacosta-matango.test/api/v1/public/books' ;

    return this.httpClient.post<ServerResponse>(url, book)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }


  update(id: number | undefined, book: BookModel): Observable<ServerResponse> {

    const url = this.API_URL_PRIVATE + '/books/' + id;
    // const url = 'http://backendacosta-matango.test/api/v1/private/books/' + id;

    return this.httpClient.put<ServerResponse>(url, book)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }


  delete(id: number | undefined): Observable<ServerResponse> {

    const url = this.API_URL_PRIVATE + '/books/' + id;

    // const url = 'http://backendacosta-matango.test/api/v1/public/books/' + id;

    return this.httpClient.delete<ServerResponse>(url)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );
  }

  changeState(id: number, book: BookModel): Observable<ServerResponse> {

    const url = this.API_URL_PRIVATE + '/books/' + id + '/state'
    

    return this.httpClient.patch<ServerResponse>(url, book)
    .pipe(
      map(response => response),
      catchError(Handler.render)
    );

  }


  //api for linux


  //   getAll(): Observable<ServerResponse> {
  //     return this.httpClient.get<ServerResponse>('http://localhost:8000/api/v1/private/books')

  //     .pipe (
  //       map(response => response),
  //       catchError(Handler.render)
  //      );

  //  }


  //   getOne(id: number | undefined): Observable<ServerResponse> {

  //     //const url this.API_URL_PRIVATE + /books;

  //     const url = 'http://localhost:8000/api/v1/private/books/' + id;

  //     return this.httpClient.get<ServerResponse>(url)
  //     .pipe (
  //       map(response => response),
  //       catchError(Handler.render)
  //      );

  //   }

  //   store(book: BookModel | undefined): Observable<ServerResponse> {

  //     const url = 'http://localhost:8000/api/v1/public/books' ;

  //     return this.httpClient.post<ServerResponse>(url, book)
  //     .pipe (
  //       map(response => response),
  //       catchError(Handler.render)
  //      );
  //   }


  //   update(id: number | undefined, book: BookModel): Observable<ServerResponse> {

  //     const url = 'http://localhost:8000/api/v1/private/books/' + id;

  //     return this.httpClient.put<ServerResponse>(url, book)
  //     .pipe (
  //       map(response => response),
  //       catchError(Handler.render)
  //      );
  //   }


  //   delete(id: number | undefined): Observable<ServerResponse> {

  //     const url = 'http://localhost:8000/api/v1/public/books/' + id;

  //     return this.httpClient.delete<ServerResponse>(url)
  //     .pipe (
  //       map(response => response),
  //       catchError(Handler.render)
  //      );
  //   }


}