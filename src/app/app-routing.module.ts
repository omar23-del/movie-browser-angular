import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies/movies.module').then(
        (module) => module.MoviesModule
      ),
  },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'watchlist', component: WatchlistComponent, title: 'watchlist' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
