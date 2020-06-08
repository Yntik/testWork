import { ActionReducerMap } from '@ngrx/store';
import { eventReducer } from '../events/event.reducer';

export const reducers: ActionReducerMap<any> = {
    event: eventReducer
}