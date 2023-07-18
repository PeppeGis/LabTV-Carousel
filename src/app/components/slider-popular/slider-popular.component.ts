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

  baseUrlImg = 'http://image.tmdb.org/t/p/original'

  ngOnInit(): void {
    this.getPopular()
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
    localStorage.setItem('id', movie.id.toString())
    const id = localStorage.getItem('id')
    this.router.navigate(['movie-details', id])
  }

}
