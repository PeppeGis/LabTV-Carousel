import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cast, Genre, Movie } from 'src/app/models/movie';
import { Result } from 'src/app/models/similar-movies';
import { Trailer } from 'src/app/models/trailer';
import { MovieService } from 'src/app/services/movie/movie.service';
import { SimilarMoviesService } from 'src/app/services/similar-movies/similar-movies.service';
import { TrailerService } from 'src/app/services/trailer/trailer.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  constructor(protected trailerService: TrailerService, private route: Router, private moviesService: MovieService, private similarMoviesService: SimilarMoviesService) { }

  trailer?: Trailer
  keyYT?: any
  detailsMovie?: Movie
  genres: Array<Genre> = []
  acting: Array<Cast> = []
  directing?: string
  similarMovies: Array<Result> = []

  sliderResponsive: any[] | undefined;

  baseUrlImg = 'http://image.tmdb.org/t/p/w185';

  ngOnInit(): void {
    // this.route.params.subscribe({
    //   next: params => {
    //     const id = params['id']
    //     this.getTrailer(id)
    //     this.getMovieDetails(id)
    //     this.toSimilarMovies(id)
    //   }
    // })
    this.getAllDetailsMovie()

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

  getAllDetailsMovie = () => {
    this.moviesService.filmToShow$.subscribe({
      next: (data: any) => {
        this.detailsMovie = data
        this.getMovieDetails(this.detailsMovie.id)
        this.getTrailer(this.detailsMovie.id)
        this.toSimilarMovies(this.detailsMovie.id)
      }
    })
  }


  getMovieDetails = (id: any) => {

    this.moviesService.getDetailsMovies(id).subscribe({
      next: (data: any) => {
        this.detailsMovie = data

        const genresMovie = data.genres.map((genres: any) => genres);
        if (genresMovie) {
          this.genres = genresMovie
        }

        const castMovie = data.credits.cast.filter((cast: Cast) => cast.known_for_department === 'Acting').slice(0, 5)
        if (castMovie) {
          this.acting = castMovie
        }

        const directingMovie = data.credits.cast.find((cast: Cast) => cast.known_for_department === 'Directing') || data.credits.crew.find((crew: Cast) => crew.known_for_department === 'Directing')
        if (directingMovie) {
          this.directing = directingMovie.name
        }
      }
    })
  }

  getTrailer = (id: any) => {
    this.trailerService.getUrlTrailer(id).subscribe({
      next: (data: any) => {
        const TrailerVideo = data.results.find((video: any) => video.name === "Official Trailer");
        if (TrailerVideo) {
          this.keyYT = TrailerVideo.key;
        }
      }
    })
  }

  toSimilarMovies = (id: any) => {
    this.similarMoviesService.getSimilarMovies(id).subscribe({
      next: (data: any) => {
        const similarMovies = data.results.map((movie: any) => movie).slice(0, 10)
        if (similarMovies) {
          this.similarMovies = similarMovies
        }
      }
    })
  }

  goToDetails = (movie: Movie) => {
    this.moviesService.filmToShow$.next(movie)
    this.route.navigateByUrl('/movie-details')
  }
}