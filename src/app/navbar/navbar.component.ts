import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})


export class NavbarComponent {
isscrolled: boolean = false

@HostListener("window:scroll", [])

windowscroll() {
  this.isscrolled = window.scrollY > 100;
}
}
