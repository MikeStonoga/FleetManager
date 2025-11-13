import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snack = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'An unexpected error occurred.';

      if (error.status === 422 && error.error?.error) {
        message = error.error.error;
      }

      if (error.status === 0) {
        message = 'Failed to connect to the server.';
      }

      snack.open(message, 'Ok', {
        duration: 5000,
        panelClass: ['snackbar-error'],
      });

      return throwError(() => error);
    })
  );
};
