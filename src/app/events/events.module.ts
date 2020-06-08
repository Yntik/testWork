import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { eventReducer } from "./event.reducer";
import { eventsSelectorKey } from "./event.selectors";
import { EventListComponent } from "./event-list/event-list.component";
import { EffectsModule } from "@ngrx/effects";
import { EventEffects } from "./event.effects";

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { InMemEventService } from "../services/http-service/event-service";

@NgModule({
    declarations: [EventListComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(eventsSelectorKey, eventReducer),
        EffectsModule.forRoot([EventEffects]),
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemEventService),
    ],
})
export class EventsModule {}
