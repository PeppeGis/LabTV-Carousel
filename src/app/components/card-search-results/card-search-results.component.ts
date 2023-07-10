import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-card-search-results',
  templateUrl: './card-search-results.component.html',
  styleUrls: ['./card-search-results.component.scss']
})
export class CardSearchResultsComponent {

  constructor(private moviesService: MovieService, private router: Router) { }

  @Input() movie: Movie

  goToDetails = (movie: Movie) => {
    this.moviesService.filmToShow$.next(movie)
    this.router.navigateByUrl('/movie-details')
  }

}
