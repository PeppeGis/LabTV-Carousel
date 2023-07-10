import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(private route: Router, moviesService: MovieService) { }

  searchValue: string = ''

  @Output() searchEmit = new EventEmitter<string>()

  search = () => {
    this.searchEmit.emit(this.searchValue)
  }

}
