import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable()
export class EventDataService {

	private lastId = 0;
	private events : Event[] = [];

	constructor() { }

	addEvent( event : Event ) : EventDataService {
		if ( !event.id ) {
			event.id = ++this.lastId;
		}

		this.events.push( event );

		return this;
	}

	deleteEvent( id : Number ) : EventDataService {
		this.events = this.events
			.filter( events => events.id !== id );

		return this;
	}

	updateEventById( id : Number, values : Object = {} ) : Event {	
		let event = this.getEventById( id );

		if ( !event ) {
			return null;
		}

		Object.assign( event, values );

		return event;
	}

	getEventById( id : Number ) : Event {
		return this.events
			.filter( event => event.id === id )
			.pop();
	}

	getAllEvents() : Event[] {
		return this.events;
	}

	toggleEventComplete( event : Event ) {
		let updatedEvent = this.updateEventById( event.id, { complete : !event.complete } )
		return updatedEvent;
	}
}
