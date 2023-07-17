import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LogRegService } from 'src/app/services/logReg/log-reg.service';
import { MovieService } from 'src/app/services/movie/movie.service';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private searchService: SearchBarService, private route: Router, private moviesService: MovieService, public logRegService: LogRegService) {
  }

  // @Input() movie: Movie

  onSearch = (value: string) => {
    this.searchService.searchValue$.next(value)
    this.searchService.getSearched(value).subscribe({
      next: (data: any) => {
        if (value) {
          console.log(this.searchService.searchValue$)
          this.searchService.moviesResults = data.results
          this.route.navigateByUrl('/search-results')
        } else {
          this.route.navigateByUrl('/dashboard-logged')
        }
      }
    })
  }

  toLogin = () => {
    this.route.navigateByUrl('login')
  }

  toLogout = () => {
    this.logRegService.logout()
    this.route.navigateByUrl('login')
  }

}
