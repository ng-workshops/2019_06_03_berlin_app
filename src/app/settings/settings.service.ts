import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Settings, Theme } from './settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  /* tslint:disable */
  private themeListener = new Subject<Theme>();
  themeChanged$ = this.themeListener.asObservable();
  /* tslint:enable */

  private readonly ENDPOINT = '/api/settings';

  constructor(private httpClient: HttpClient, private router: Router) {}

  get() {
    return this.httpClient.get<Settings>(this.ENDPOINT);
  }

  set(settings: Settings) {
    if (settings.initialRoute) {
      this.setRoute(settings.initialRoute);
    }

    return this.httpClient.post<Settings>(this.ENDPOINT, settings).pipe(
      tap(_ => this.themeListener.next(settings.theme)),
      catchError(this.handleError)
    );
  }

  setDefaultRoute() {
    this.get().subscribe(settings => {
      if (settings && settings.initialRoute) {
        this.setRoute(settings.initialRoute);
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an Error with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private setRoute(route?: string) {
    if (!route) {
      return;
    }

    const startRoute = this.router.config.find(
      r => r.data && r.data.hasDynamicRedirect
    );

    if (startRoute) {
      startRoute.redirectTo = route;
    }
  }
}
