import { TestBed } from '@angular/core/testing';

import { CountryDialCodeService } from './country-dial-code.service';

describe('CountryDialCodeService', () => {
  let service: CountryDialCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryDialCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
