import { TestBed } from '@angular/core/testing';

import { SimilarMoviesService } from './similar-movies.service';

describe('SimilarMoviesService', () => {
  let service: SimilarMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimilarMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
