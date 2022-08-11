import { TestBed } from '@angular/core/testing';

import { ObtainHeroesService } from './obtain-heroes.service';

describe('ObtainHeroesService', () => {
  let service: ObtainHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtainHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
