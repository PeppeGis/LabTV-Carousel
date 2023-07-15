import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardLoggedComponent } from './components/dashboard-logged/dashboard-logged.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AllNowPlayingComponent } from './components/all-now-playing/all-now-playing.component';
import { AllTopRatedComponent } from './components/all-top-rated/all-top-rated.component';
import { AllUpcomingComponent } from './components/all-upcoming/all-upcoming.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard-logged", component: DashboardLoggedComponent },
  { path: "search-results", component: SearchResultsComponent },
  { path: "movie-details", component: MovieDetailsComponent },
  { path: "now-playing", component: AllNowPlayingComponent },
  { path: "top-rated", component: AllTopRatedComponent },
  { path: "upcoming", component: AllUpcomingComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: '/dashboard-logged', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
