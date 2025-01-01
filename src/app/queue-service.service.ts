import { Injectable } from '@angular/core';
import { Movies } from './interfaces/movies';
@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private queue: Movies[] = [];

  constructor() {}

  getQueue(): Movies[] {
    return this.queue;
  }

  addToQueue(movie: Movies) {
    this.queue.push(movie);
    console.log('تم إضافة الفيلم إلى قائمة الانتظار:', movie);
  }
}
