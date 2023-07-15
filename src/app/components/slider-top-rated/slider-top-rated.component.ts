import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';;
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-slider-top-rated',
  templateUrl: './slider-top-rated.component.html',
  styleUrls: ['./slider-top-rated.component.scss']
})
export class SliderTopRatedComponent {

  @Input() movie: Movie

  constructor(public moviesService: MovieService, private router: Router) { }

  sliderResponsive: any[] | undefined;
  baseUrlImg = 'http://image.tmdb.org/t/p/original'

  ngOnInit(): void {
    this.getTopRated()

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

  getTopRated = () => {
    this.moviesService.getTopRatedMovies().subscribe({
      next: (data: any) => {
        this.moviesService.topRated = data.results
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
