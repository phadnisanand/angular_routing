import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homechild3Component } from './homechild3.component';

describe('Homechild3Component', () => {
  let component: Homechild3Component;
  let fixture: ComponentFixture<Homechild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homechild3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homechild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
