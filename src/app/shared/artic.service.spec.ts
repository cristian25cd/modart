import { TestBed } from '@angular/core/testing';

import { ArticService } from './artic.service';

describe('ArticService', () => {
  let service: ArticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
