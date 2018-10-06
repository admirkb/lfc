import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Control3Component } from './control3.component';

describe('Control3Component', () => {
  let component: Control3Component;
  let fixture: ComponentFixture<Control3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Control3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Control3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
