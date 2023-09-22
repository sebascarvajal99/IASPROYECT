import { Component,OnInit  } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  currentIndex = 0;
  interval: any; // Variable para almacenar el intervalo
  ngOnInit() {
    this.startCarousel();
  }
  

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000); // Cambia de diapositiva cada 3 segundos (ajusta este valor según tus preferencias)
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + 4) % 3;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }
  
}
