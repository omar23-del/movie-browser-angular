import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  standalone: false,

  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
showloader: boolean = false

constructor(private loader: LoaderService) {
  this.loader.isloading.subscribe((value) =>
    this.showloader = value
  );
}
}
