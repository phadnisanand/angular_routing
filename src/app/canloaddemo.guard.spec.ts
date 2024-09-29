import { TestBed } from '@angular/core/testing';

import { CanloaddemoGuard } from './canloaddemo.guard';

describe('CanloaddemoGuard', () => {
  let guard: CanloaddemoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanloaddemoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
