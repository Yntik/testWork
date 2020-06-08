import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { eventReducer } from './event.reducer';
import { eventsSelectorKey } from './event.selectors'
import { EventListComponent } from './event-list/event-list.component';



@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(eventsSelectorKey, eventReducer)
  ]
})
export class EventsModule { }
