import { TestBed, inject } from '@angular/core/testing';

import { EventDataService } from './event-data.service';

describe('EventDataService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [EventDataService]
		});
	});

	it('should ...', inject([EventDataService], (service: EventDataService) => {
		expect(service).toBeTruthy();
	}));
});
