import { TestBed } from '@angular/core/testing';

import { SlabService } from './slab.service';

describe('SlabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlabService = TestBed.get(SlabService);
    expect(service).toBeTruthy();
  });
});
