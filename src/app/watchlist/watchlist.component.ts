import { Component, OnInit } from '@angular/core';
import { QueueService } from '../queue-service.service';
import { Movies } from '../interfaces/movies';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist:Movies[] = [] ;

  constructor(private watchlistService: QueueService) {}

  ngOnInit() {
    if(Array.isArray(this.watchlist)) {
      this.watchlist = this.watchlistService.getQueue();
    }
    console.log(this.watchlist)
  }
}


