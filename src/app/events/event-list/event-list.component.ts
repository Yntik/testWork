import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as eventActions from '../event.actions'
import * as fromEvent from '../event.selectors'
import { Event } from '../../store/models'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events:  Event[]
  constructor(private store: Store<Event[]>, private router: Router) { }

  ngOnInit(): void {
    this.store.select(fromEvent.selectEvent).subscribe((events) => {
      this.events = events
    })
    this.store.dispatch(eventActions.GetEvents())
  }

  addEvent() {
    this.router.navigate(['add-event'])
  }
}
