import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-slider-popular',
  templateUrl: './slider-popular.component.html',
  styleUrls: ['./slider-popular.component.scss']
})
export class SliderPopularComponent {

  constructor(public moviesService: MovieService, private router: Router) { }

  sliderResponsive: any[] | undefined;
  baseUrlImg = 'http://image.tmdb.org/t/p/original'

  ngOnInit(): void {
    this.getPopular()

    this.sliderResponsive = [
      {
        breakpoint: '1500px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '950px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '700px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getPopular = () => {
    this.moviesService.getPopularMovies().subscribe({
      next: (data: any) => {
        this.moviesService.popular = data.results
      },
      error: err => console.log(err)
    })
  }

  // DETAILS

  goToDetails = (movie: Movie) => {
    this.moviesService.filmToShow$.next(movie)
    this.router.navigateByUrl('/movie-details')
  }

}
