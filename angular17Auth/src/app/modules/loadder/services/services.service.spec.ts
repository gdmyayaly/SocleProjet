import { TestBed } from '@angular/core/testing';

import { LoadderService } from './services.service';

describe('LoadderService', () => {
  let service: LoadderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
