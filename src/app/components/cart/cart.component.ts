import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { BuyMovieService } from 'src/app/services/buy-movie/buy-movie.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(protected buyFilm: BuyMovieService) {
    this.getBuyMedia()
  }

  buyedMovies: any[] = []

  getBuyMedia = () => {
    this.buyFilm.getMedia().subscribe({
      next: (films: any) => {
        console.log(films)
        this.buyedMovies = films
      }
    })
  }

  deleteMovieCart = (id: any) => {
    this.buyFilm.deleteMovie(id).subscribe({
      next: (id: any) => {
        this.getBuyMedia()
      }
    })
  }
}
