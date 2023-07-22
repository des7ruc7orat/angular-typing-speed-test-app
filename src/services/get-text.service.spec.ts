import { TestBed } from '@angular/core/testing';

import { GetTextServiceService } from './get-text.service';

describe('GetTextServiceService', () => {
  let service: GetTextServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTextServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
