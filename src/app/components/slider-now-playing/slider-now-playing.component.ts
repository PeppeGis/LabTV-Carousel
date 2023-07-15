import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-slider-now-playing',
  templateUrl: './slider-now-playing.component.html',
  styleUrls: ['./slider-now-playing.component.scss']
})
export class SliderNowPlayingComponent {

  constructor(public moviesService: MovieService, private router: Router) { }

  sliderResponsive: any[] | undefined;
  baseUrlImg = 'http://image.tmdb.org/t/p/original'

  ngOnInit(): void {
    this.getNowPlaying()

    this.sliderResponsive = [
      {
        breakpoint: '1500px',
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '950px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '700px',
        numVisible: 2,
        numScroll: 1
      }
    ];
  }

  getNowPlaying = () => {
    this.moviesService.getNowPlayingMovies().subscribe({
      next: (data: any) => {
        this.moviesService.nowPlaying = data.results
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
