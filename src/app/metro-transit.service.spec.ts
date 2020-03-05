import { TestBed } from '@angular/core/testing';

import { MetroTransitService } from './metro-transit.service';

describe('MetroTransitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetroTransitService = TestBed.get(MetroTransitService);
    expect(service).toBeTruthy();
  });
});
