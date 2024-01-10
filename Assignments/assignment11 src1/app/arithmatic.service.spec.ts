import { TestBed } from '@angular/core/testing';

import { ArithmeticService } from './arithmatic.service';

describe('ArithmaticService', () => {
  let service: ArithmeticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithmeticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
