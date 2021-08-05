import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

export class Handler {
  static render(error: HttpErrorResponse) {
    return throwError(error);
  }
}