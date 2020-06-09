import { EventsState } from '../store/models';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const eventsSelectorKey = 'events';

export const selectEvents = createFeatureSelector<EventsState>(eventsSelectorKey);

export const selectEvent = createSelector(
    selectEvents,
    ({ events }: EventsState) => events
);
