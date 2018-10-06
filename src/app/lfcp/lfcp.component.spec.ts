import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcpComponent } from './lfcp.component';

describe('LfcpComponent', () => {
  let component: LfcpComponent;
  let fixture: ComponentFixture<LfcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
