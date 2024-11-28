import { TestBed } from '@angular/core/testing';

import { PosientService } from './posient.service';

describe('PosientService', () => {
  let service: PosientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
