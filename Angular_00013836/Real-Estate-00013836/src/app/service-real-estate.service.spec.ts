import { TestBed } from '@angular/core/testing';

import { ServiceRealEstateService } from './service-real-estate.service';

describe('ServiceRealEstateService', () => {
  let service: ServiceRealEstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRealEstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
