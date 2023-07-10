import { Component } from '@angular/core';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  constructor(public searchService: SearchBarService) { }

  getMoreMovieFromService = () => {
    this.searchService.getSearched().subscribe({
      next: (data: any) => this.searchService.moviesResults = [...this.searchService.moviesResults, ...data.results],
      error: err => console.log(err)
    })
  }

  goToDetails = () => {

  }

}
