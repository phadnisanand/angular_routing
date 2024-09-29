import { TestBed } from '@angular/core/testing';

import { CanchildguarddemoGuard } from './canchildguarddemo.guard';

describe('CanchildguarddemoGuard', () => {
  let guard: CanchildguarddemoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanchildguarddemoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
