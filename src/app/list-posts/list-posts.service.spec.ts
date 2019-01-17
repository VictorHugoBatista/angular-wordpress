import { TestBed } from '@angular/core/testing';

import { ListPostsService } from './list-posts.service';

describe('ListPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListPostsService = TestBed.get(ListPostsService);
    expect(service).toBeTruthy();
  });
});
