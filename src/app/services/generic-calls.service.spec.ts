import { TestBed } from '@angular/core/testing';

import { GenericCallsService } from './generic-calls.service';

describe('GenericCallsService', () => {
  let service: GenericCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
