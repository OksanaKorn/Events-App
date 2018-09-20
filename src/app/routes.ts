import { Routes } from "@angular/router";
import { EventDetailsComponent } from "src/app/events/event-details/event-details.component";
import { EventsListComponent } from "src/app/events/events-list.component";
import { CreateEventComponent } from "src/app/events/create-event.component";
import { Error404Component } from "src/app/errors/404.component";
import { EventListResolver } from "src/app/events/events-list-resolver.service";
import { CreateSessionComponent } from "src/app/events/event-details/create-session.component";
import { EventResolver } from "src/app/events/event-resolver.service";

export const appRoutes:Routes = [
    { path: "events/new", component: CreateEventComponent, canDeactivate: ["CanDeactivateCreateEvent"]},
    { path: "events", component: EventsListComponent, resolve:{events: EventListResolver}},
    { path: "events/:id", component: EventDetailsComponent, resolve: {event: EventResolver}},
    { path: "events/session/new", component: CreateSessionComponent},
    { path: "404", component: Error404Component},
    { path: "", redirectTo: "events", pathMatch: "full"},
    { path: "user", loadChildren: "./user/user.module#UserModule"}
]