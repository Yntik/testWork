import * as eventActions from './event.actions'
import { createFeatureSelector, createReducer, on, State } from '@ngrx/store'
import { Event, EventsState } from '../store/models'

export const initialState: EventsState = {
    events: []
  }

export const eventReducer = createReducer(
    initialState, 
    on(eventActions.SetEvents, (state, { payload }) => ({...state, events: payload })),
    on(eventActions.ApiError, (state, { payload }) => {
      console.log(payload)
      return state
    })
    //on(eventActions.RemoveEvent, (state, { payload }) => ({...state, events: payload }))
    //on(eventActions.SetEvents, (state, { payload }) => ({...state, events: payload }))
)