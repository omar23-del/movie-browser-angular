import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesServiceService } from '../movies-service.service';
import { Series } from '../interfaces/series';
import { data } from 'autoprefixer';

@Component({
  selector: 'app-series',
  standalone: false,

  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent implements OnInit, OnDestroy {
  seriescontainer: Series[] = [];
  cancelrequest!: Subscription;

  constructor(private moviesservice: MoviesServiceService) {}

  getseries() {
    this.cancelrequest = this.moviesservice.getseries().subscribe(
      (data) => {
        this.seriescontainer = data.results;
        console.log(this.seriescontainer);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getseries();
  }

  ngOnDestroy() {
    if (this.cancelrequest) {
      this.cancelrequest.unsubscribe();
    }
  }
}
