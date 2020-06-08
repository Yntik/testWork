import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as eventActions from '../event.actions'
import * as fromEvent from '../event.selectors'
import { Event } from '../../store/models'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events:  Observable<Event[]>
  constructor(private store: Store<Event[]>) { }

  ngOnInit(): void {
    this.events = this.store.select(fromEvent.selectEvent)

    this.events.subscribe((val) => {
      console.log(val)
    })
  }

}
