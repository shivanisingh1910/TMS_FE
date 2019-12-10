import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticketservice.service';

describe('TicketserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketService = TestBed.get(TicketService);
    expect(service).toBeTruthy();
  });
});
