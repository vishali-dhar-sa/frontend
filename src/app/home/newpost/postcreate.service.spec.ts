import { TestBed } from '@angular/core/testing';

import { PostcreateService } from './postcreate.service';

describe('PostcreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostcreateService = TestBed.get(PostcreateService);
    expect(service).toBeTruthy();
  });
});
