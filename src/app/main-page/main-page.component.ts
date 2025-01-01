import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesServiceService } from '../movies-service.service';
import { Movies } from '../interfaces/movies';
import { QueueService } from '../queue-service.service';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit, OnDestroy {
  moviescontainer: Movies[] = [];
  cancelrequest!: Subscription;
  currentIndex: number = 0;
  movies: Movies[] = [];

  constructor(private moviesservice: MoviesServiceService, private queueService: QueueService) {}

  getmovies() {
    this.cancelrequest = this.moviesservice.getmovies().subscribe(
      (data) => {
        if (data && Array.isArray(data.results)) {
          this.moviescontainer = data.results;
        }
        console.log(this.moviescontainer);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getmovies();
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

  addToQueue(movie: Movies) {
    this.queueService.addToQueue(movie);
  }
}
