import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesServiceService } from '../movies-service.service';
import { Movies } from '../interfaces/movies';
import { PopularMovies } from '../interfaces/popular-movies';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit, OnDestroy {
  moviescontainer: Movies[] = [];
  popularcontainer: PopularMovies[] = []
  cancelrequest!: Subscription;
  currentIndex: number = 0;

  constructor(private moviesservice: MoviesServiceService) {}

  getmovies() {
    this.cancelrequest = this.moviesservice.getmovies().subscribe(
      (data) => {
          this.popularcontainer = data.results;
        console.log(this.popularcontainer);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  gettopmovies() {
    this.cancelrequest = this.moviesservice.gettopmovies().subscribe(
      (data) => {
          this.moviescontainer = data.results;
        console.log(this.moviescontainer);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  ngOnInit() {
    this.getmovies();
    this.gettopmovies()
  }

  ngOnDestroy() {
    if (this.cancelrequest) {
      this.cancelrequest.unsubscribe();
    }
  }

  moveSlide(direction: string) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (direction === 'left') {
      this.currentIndex =
        this.currentIndex === 0 ? totalSlides - 1 : this.currentIndex - 1;
    } else if (direction === 'right') {
      this.currentIndex =
        this.currentIndex === totalSlides - 1 ? 0 : this.currentIndex + 1;
    }

    slides.forEach((slide) => {
      (slide as HTMLElement).style.transform = `translateX(-${
        this.currentIndex * 135
      }px)`;
    });
  }
}
