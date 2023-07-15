import { TestBed } from '@angular/core/testing';

import { BuyMovieService } from './buy-movie.service';

describe('BuyMovieService', () => {
  let service: BuyMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
