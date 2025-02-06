import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private searchsubject = new Subject<string>()

  search$ = this.searchsubject.asObservable()

  updatesearch(query: string) {
    this.searchsubject.next(query)
  }
}
