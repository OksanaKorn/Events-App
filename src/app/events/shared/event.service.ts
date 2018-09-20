import { Injectable, EventEmitter } from "@angular/core"
import { Subject } from "rxjs";
import { IEvent, ISession } from "src/app/events/shared/event.model";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class EventService {
  
  constructor(private http: HttpClient){}

    getEvents():Observable<IEvent[]> {
      return this.http.get<IEvent[]>("/api/events")
        .pipe(catchError(this.handleError<IEvent[]>("getEvents", [])))
    }

    getEvent(id:number):Observable<IEvent> {
      return this.http.get<IEvent>("/api/events/" + id)
        .pipe(catchError(this.handleError<IEvent>("getEvent")))
    }

    saveEvent(event) {
      let options = { headers: new HttpHeaders({"Content-Type": "application/json"})};
      return this.http.post<IEvent>("/api/events", event, options)
      .pipe(catchError(this.handleError<IEvent>("saveEvent")))
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
      return this.http.get<ISession[]>("/api/sessions/search?search=" + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>("searchSessions")))
    }

    private handleError<T> (operation = "operation", result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of (result as T)
      }
    }

}