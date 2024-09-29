import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadModuleByCmdComponent } from './lazyload-module-by-cmd.component';

describe('LazyloadModuleByCmdComponent', () => {
  let component: LazyloadModuleByCmdComponent;
  let fixture: ComponentFixture<LazyloadModuleByCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadModuleByCmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloadModuleByCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
