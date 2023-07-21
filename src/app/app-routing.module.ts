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
import { loggedInGuard } from './guards/logged-in.guard';
import { CartComponent } from './components/cart/cart.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "dashboard-logged", component: DashboardLoggedComponent, canActivate: [loggedInGuard] },
  { path: "search-results", component: SearchResultsComponent },
  { path: "movie-details/:id", component: MovieDetailsComponent, canActivate: [loggedInGuard] },
  { path: "login", component: LoginComponent, data: { animation: 'Login' } },
  { path: "register", component: RegisterComponent, data: { animation: 'Register' } },
  { path: "cart", component: CartComponent, canActivate: [loggedInGuard] },
  { path: "contacts", component: ContactsComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
