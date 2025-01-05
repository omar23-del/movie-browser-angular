import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../../main-page/main-page.component';
import { MovieDetailComponent } from '../../movie-detail/movie-detail.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
    { path: 'main-page', component: MainPageComponent, title: 'main page' },
    {
      path: 'movie-detail/:id',
      component: MovieDetailComponent,
      title: 'movie details',
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
