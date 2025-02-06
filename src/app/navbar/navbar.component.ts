import { Component, HostListener } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {
isscrolled: boolean = false

constructor(private searchservice: SearchService) {}

@HostListener("window:scroll", [])

windowscroll() {
  this.isscrolled = window.scrollY > 100;
}

onSearch(event: Event) {
  const query = (event.target as HTMLInputElement).value;
  this.searchservice.updatesearch(query);
}
}
