import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './events/event-list/event-list.component'
import { AddEventComponent } from './events/add-event/add-event.component'


const routes: Routes = [
  {
    path: 'event-list',
    component: EventListComponent
  },
  {
    path: 'add-event',
    component: AddEventComponent
  },
  { path: '',
    redirectTo: 'event-list',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
