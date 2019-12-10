import { TestBed } from '@angular/core/testing';

import { AllticketsService } from './alltickets.service';

describe('AllticketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllticketsService = TestBed.get(AllticketsService);
    expect(service).toBeTruthy();
  });
});
