import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppError extends Error {
  private error = new Subject<string>();

  constructor(message: string) {
    super(message);

    Error.captureStackTrace(this, this.constructor);
  }
}

//this.appError.error.subscribe(errorMessage => {this.error = errorMessage});
