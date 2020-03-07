import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetroTransitService {
  private apiBase = ' https://svc.metrotransit.org/NexTrip/';
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.set('Access-Control-Allow-Origin', '*');
  }

  getStopInfo(stop) {
    const url = this.apiBase + stop + '?format=json';
    // return this.http.get(url, { headers: this.headers });
    return from(fetch(url).then(response => response.json())).pipe(
      catchError(err => {
        console.error(err);
        return of([{ DepartureText: 'Error' }]);
      })
    );
  }
}
