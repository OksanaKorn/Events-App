import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from 'src/app/events/events-list.component';
import { EventThumbnailComponent } from 'src/app/events/event-thumbnail.component';
import { NavBarComponent } from 'src/app/nav/nav-bar.component';
import { EventService } from 'src/app/events/shared/event.service';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';
import { EventDetailsComponent } from 'src/app/events/event-details/event-details.component';
import { appRoutes } from 'src/app/routes';
import { Error404Component } from 'src/app/errors/404.component';
import { EventListResolver } from 'src/app/events/events-list-resolver.service';
import { AuthService } from 'src/app/user/auth.service';
import { CreateEventComponent } from 'src/app/events/create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from 'src/app/events/event-details/create-session.component';
import { SessionListComponent } from 'src/app/events/event-details/session-list.component';
import { CollapsibleWellComponent } from 'src/app/common/collapsible-well.component';
import { DurationPipe } from 'src/app/events/shared/duration.pipe';
import { JQ_TOKEN } from 'src/app/common/jQuery.service';
import { SimpleModalComponent } from 'src/app/common/simple.modal.component';
import { ModalTriggerDirective } from 'src/app/common/modal-trigger.directive';
import { UpvoteComponent } from 'src/app/events/event-details/upvote.component';
import { VoterService } from 'src/app/events/event-details/voter.service';
import { LocationValidator } from 'src/app/events/location-validator.directive';
import { EventResolver } from 'src/app/events/event-resolver.service';

let toastr:Toastr = window["toastr"];
let jQuery = window["$"];


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery},
    EventListResolver,
    EventResolver,
    AuthService,
    VoterService,
    { 
      provide: "CanDeactivateCreateEvent",
      useValue: checkDirtyState
     }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
  return window.confirm("You have not save this event, do you really want to cancel?")
  return true
}