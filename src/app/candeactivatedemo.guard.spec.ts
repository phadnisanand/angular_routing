import { TestBed } from '@angular/core/testing';

import { CandeactivatedemoGuard } from './candeactivatedemo.guard';

describe('CandeactivatedemoGuard', () => {
  let guard: CandeactivatedemoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandeactivatedemoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
