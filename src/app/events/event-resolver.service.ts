import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { EventService } from "src/app/events/shared/event.service";
import { map } from "rxjs/operators"

@Injectable()

export class EventResolver implements Resolve<any> {
    constructor (private eventService: EventService){}

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(route.params["id"])
    }
}