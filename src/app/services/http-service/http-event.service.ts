import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Event } from '../../store/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpEventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Object> {
    return this.http.get('api/events');
  }

  addEvent(event: Event): Observable<Object> {
    return this.http.post('api/events', { ...event });
  }
}
