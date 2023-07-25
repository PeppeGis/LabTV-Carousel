import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardSearchResultsComponent } from './components/card-search-results/card-search-results.component';
import { LoginInterceptor } from './interceptor/login.interceptor';
import { CartComponent } from './components/cart/cart.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalAddFilmComponent } from './components/modal-add-film/modal-add-film.component';
import { ModalRegComponent } from './components/modal-reg/modal-reg.component';
import { ModalContactsComponent } from './components/modal-contacts/modal-contacts.component';


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
    CardSearchResultsComponent,
    CartComponent,
    ContactsComponent,
    ModalAddFilmComponent,
    ModalRegComponent,
    ModalContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
