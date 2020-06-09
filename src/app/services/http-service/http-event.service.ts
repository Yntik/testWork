import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }from '@angular/common/http';
import { Event } from '../../store/models'

@Injectable({
  providedIn: 'root'
})
export class HttpEventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('api/events')
  }

  addEvent(event: Event) {
    return this.http.post('api/events', { ...event })
  }
}
