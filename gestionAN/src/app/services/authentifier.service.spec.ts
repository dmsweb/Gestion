import { TestBed } from '@angular/core/testing';

import { AuthentifierService } from './authentifier.service';

describe('AuthentifierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentifierService = TestBed.get(AuthentifierService);
    expect(service).toBeTruthy();
  });
});
