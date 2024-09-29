import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedemoComponent } from './templatedemo.component';

describe('TemplatedemoComponent', () => {
  let component: TemplatedemoComponent;
  let fixture: ComponentFixture<TemplatedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatedemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
