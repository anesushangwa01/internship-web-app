import { TestBed } from '@angular/core/testing';

import { JobappService } from './jobapp.service';

describe('JobappService', () => {
  let service: JobappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
