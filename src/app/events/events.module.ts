import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { eventReducer } from "./event.reducer";
import { eventsSelectorKey } from "./event.selectors";
import { EventListComponent } from "./event-list/event-list.component";
import { EffectsModule } from "@ngrx/effects";
import { EventEffects } from "./event.effects";

import { DpDatePickerModule } from 'ng2-date-picker';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { InMemEventService } from "../services/http-service/event-service";
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
    declarations: [EventListComponent, AddEventComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(eventsSelectorKey, eventReducer),
        EffectsModule.forRoot([EventEffects]),
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemEventService),
        ReactiveFormsModule,
        DpDatePickerModule,
    ],
})
export class EventsModule {}
