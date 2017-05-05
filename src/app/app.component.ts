import { Component } from '@angular/core';
import { Event } from './event';
import { EventDataService } from './event-data.service';

@Component({
	selector: 'cucm-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.scss'
	],
	providers: [
		EventDataService
	]
})
export class AppComponent {
	
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
}
