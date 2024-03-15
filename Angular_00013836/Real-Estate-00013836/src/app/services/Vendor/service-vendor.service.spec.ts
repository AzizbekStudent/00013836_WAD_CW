import { TestBed } from '@angular/core/testing';

import { ServiceVendorService } from './service-vendor.service';

describe('ServiceVendorService', () => {
  let service: ServiceVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
