import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpEventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('api/events')
  }
}
