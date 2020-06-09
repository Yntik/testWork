import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { EventsState, Event } from '../store/models';
import * as EventActions from './event.actions';

import { HttpEventService } from '../services/http-service/http-event.service';

@Injectable()
export class EventEffects {
  constructor(private actions$: Actions, private store: Store<EventsState>, private eventHttp: HttpEventService) {}
  @Effect()
  GetEvents$ = this.actions$.pipe(
    ofType(EventActions.GetEvents),
    switchMap(() => {
        return this.eventHttp.getEvents().pipe(
          map((events: Event[]) => {
            return EventActions.SetEvents({payload: events});
          }),
          catchError((error: Error) => {
            return of(EventActions.ApiError({ payload: error }));
          })
        );
    }),
  );

  @Effect()
  CreateEvent$ = this.actions$.pipe(
    ofType(EventActions.CreateEvent),
    switchMap(({ payload }) => {
        return this.eventHttp.addEvent(payload).pipe(
          map((event: Event) => {
            return EventActions.GetEvents();
          }),
          catchError((error: Error) => {
            return of(EventActions.ApiError({ payload: error }));
          })
        );
    }),
  );
}
