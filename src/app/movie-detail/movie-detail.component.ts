import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Moviesdetails } from '../interfaces/moviedetails';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movieid: string = '';
  movie: Moviesdetails | null = null;

  constructor(
    private movieservice: MoviesServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieid = id;
      this.getmoviedetails(this.movieid);
    }
  }

  getmoviedetails(id: string) {
    this.movieservice.getmoviedetails(id).subscribe(
      (data) => {
        this.movie = data
      console.log(data);
    },
    (error) => {
      console.log(error)
    }
  );
  }
}
