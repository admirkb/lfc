import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Control1Component } from './control1.component';

describe('Control1Component', () => {
  let component: Control1Component;
  let fixture: ComponentFixture<Control1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Control1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Control1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
