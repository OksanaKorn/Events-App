import { Component } from "@angular/core";
import { AuthService } from "src/app/user/auth.service";
import { ISession } from "src/app/events/shared/event.model";
import { EventService } from "src/app/events/shared/event.service";

@Component({
    selector: "nav-bar",
    templateUrl: "./nav-bar.component.html",
    styles: [`
      .nav navbar-nav { font-size: 15px; }
      #searchForm { margin-right: 100px;}
      @media (max-width: 1200px) {#searchForm {display: none;}}
      li > a.active { color: #F97924; }
    `]
})

export class NavBarComponent {
  searchTerm: string = ""
  foundSessions: ISession[]

  constructor(private auth: AuthService, private eventService: EventService){}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe
    (sessions => {this.foundSessions = sessions})
  }
}