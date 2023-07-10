import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SliderPopularComponent } from './components/slider-popular/slider-popular.component';
import { SliderNowPlayingComponent } from './components/slider-now-playing/slider-now-playing.component';
import { SliderUpcomingComponent } from './components/slider-upcoming/slider-upcoming.component';
import { SliderTopRatedComponent } from './components/slider-top-rated/slider-top-rated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { DashboardLoggedComponent } from './components/dashboard-logged/dashboard-logged.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardSearchResultsComponent } from './components/card-search-results/card-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    DashboardComponent,
    SliderPopularComponent,
    SliderNowPlayingComponent,
    SliderUpcomingComponent,
    SliderTopRatedComponent,
    DashboardLoggedComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    MovieDetailsComponent,
    SearchResultsComponent,
    CardSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }