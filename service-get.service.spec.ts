import { TestBed, inject } from '@angular/core/testing';

import { ServiceGetService } from './service-get.service';

describe('ServiceGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceGetService]
    });
  });

  it('should ...', inject([ServiceGetService], (service: ServiceGetService) => {
    expect(service).toBeTruthy();
  }));
});
