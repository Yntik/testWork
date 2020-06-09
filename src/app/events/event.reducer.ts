import * as eventActions from './event.actions';
import { createReducer, on } from '@ngrx/store';
import { EventsState } from '../store/models';

export const initialState: EventsState = {
    events: []
  };

export const eventReducer = createReducer(
    initialState,
    on(eventActions.SetEvents, (state, { payload }) => ({...state, events: payload })),
    on(eventActions.ApiError, (state, { payload }) => {
      console.log(payload);
      return state;
    })
);
