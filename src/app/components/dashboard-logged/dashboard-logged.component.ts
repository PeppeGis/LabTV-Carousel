import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-dashboard-logged',
  templateUrl: './dashboard-logged.component.html',
  styleUrls: ['./dashboard-logged.component.scss']
})
export class DashboardLoggedComponent { }
