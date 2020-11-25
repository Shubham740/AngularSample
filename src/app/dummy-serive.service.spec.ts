import { TestBed } from '@angular/core/testing';

import { DummySeriveService } from './dummy-serive.service';

describe('DummySeriveService', () => {
  let service: DummySeriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummySeriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
