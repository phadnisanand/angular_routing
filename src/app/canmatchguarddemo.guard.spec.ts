import { TestBed } from '@angular/core/testing';

import { CanmatchguarddemoGuard } from './canmatchguarddemo.guard';

describe('CanmatchguarddemoGuard', () => {
  let guard: CanmatchguarddemoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanmatchguarddemoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
