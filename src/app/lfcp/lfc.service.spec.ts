import { TestBed, inject } from '@angular/core/testing';

import { LfcService } from './lfc.service';

describe('LfcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LfcService]
    });
  });

  it('should be created', inject([LfcService], (service: LfcService) => {
    expect(service).toBeTruthy();
  }));
});
