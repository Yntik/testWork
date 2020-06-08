import { createAction, props } from '@ngrx/store'
import { Event } from '../store/models'

export const GET_EVENTS = '[EVENT] Get events'
export const SET_EVENTS = '[EVENT] Set events'
export const CREATE_EVENT = '[EVENT] Create event'
export const UPDATE_EVENT = '[EVENT] Update event'
export const REMOVE_EVENT = '[EVENT] Remove event'

export const API_ERROR = '[EVENT] Event api error'

export const GetEvents = createAction(GET_EVENTS)
export const SetEvents = createAction(SET_EVENTS, props<{ payload: Event[] }>())
export const CreateEvent = createAction(CREATE_EVENT, props<{ payload: Event }>())
export const UpdateEvent = createAction(UPDATE_EVENT, props<{ payload: Event }>())
export const RemoveEvent = createAction(REMOVE_EVENT, props<{ payload: Event }>())

export const ApiError = createAction(API_ERROR, props<{ payload: Error }>())