import { TestBed } from '@angular/core/testing';

import { SecondService } from './second.service';

describe('SecondService', () => {
  let service: SecondService;

  const fakeCheck = {check: () => true};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
