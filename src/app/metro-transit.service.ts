import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const url = this.apiBase + stop;
    return this.http.get(url, { headers: this.headers });
  }
}
