import { Component, OnInit } from '@angular/core'; 

import { Event } from './event';
import { EventDataService } from './event-data.service';

import { HeaderComponent } from '../header/header.component';

@Component({
	selector: 'cucm-root',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss'],
	providers: [
		EventDataService
	]
})
export class EventsComponent implements OnInit {

	newEvent : Event = new Event();

	constructor( private eventDataService : EventDataService ) {}

	addEvent() {
		this.eventDataService.addEvent( this.newEvent );
		this.newEvent = new Event();
	}

	toggleEventComplete( event ) {
		this.eventDataService.toggleEventComplete( event );
	}

	removeEvent( event ) {
		this.eventDataService.deleteEvent( event.id );
	}

	get events() {
		return this.eventDataService.getAllEvents();
	}

	ngOnInit() {
	}

}
