import { TestBed } from '@angular/core/testing';

import { CanactivatedemoGuard } from './canactivatedemo.guard';

describe('CanactivatedemoGuard', () => {
  let guard: CanactivatedemoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanactivatedemoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
