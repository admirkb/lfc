import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcViewComponent } from './lfc-view.component';

describe('LfcViewComponent', () => {
  let component: LfcViewComponent;
  let fixture: ComponentFixture<LfcViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfcViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
