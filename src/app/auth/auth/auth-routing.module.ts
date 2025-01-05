import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from '../../series/series.component';
import { SeriesSetailComponent } from '../../series-setail/series-setail.component';


const routes: Routes = [
  {path:"series", component:SeriesComponent, title:"series" },
  { path: 'serie-setail/:id', component: SeriesSetailComponent, title:"serie details"  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
