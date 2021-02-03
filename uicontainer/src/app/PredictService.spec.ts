import { TestBed, inject } from '@angular/core/testing';

import { PredictService } from './PredictService';

describe('PredictService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredictService]
    });
  });

  it('should be created', inject([PredictService], (service: PredictService) => {
    expect(service).toBeTruthy();
  }));
});
