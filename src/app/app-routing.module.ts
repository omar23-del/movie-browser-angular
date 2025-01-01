import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, title:"login" },
  { path: 'main-page', component: MainPageComponent, title:"main page"  },
  { path: 'movie-detail/:id', component: MovieDetailComponent, title:"movie detail"  },
  { path: 'watchlist', component: WatchlistComponent, title:"watchlist"  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
