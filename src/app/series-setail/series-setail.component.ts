import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Seriesdetails } from '../interfaces/series-details';

@Component({
  selector: 'app-series-setail',
  standalone: false,

  templateUrl: './series-setail.component.html',
  styleUrl: './series-setail.component.css'
})
export class SeriesSetailComponent implements OnInit {
  serieid: string = '';
  serie: Seriesdetails | null = null;

  constructor(
    private movieservice: MoviesServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.serieid = id;
      this.getseriesdetails(this.serieid);
    }
  }

  getseriesdetails(id: string) {
    this.movieservice.getseriesdetails(id).subscribe(
      (data) => {
        this.serie = data
      console.log(data);
    },
    (error) => {
      console.log(error)
    }
  );
  }
}
