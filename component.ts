// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./style.css'],
})
export class AppComponent {
  shoes = [
    {
      name: 'Urban Runner',
      price: 4999,
      image: 'https://via.placeholder.com/300x200?text=Shoe+1',
    },
    {
      name: 'Classic Leather',
      price: 6299,
      image: 'https://via.placeholder.com/300x200?text=Shoe+2',
    },
    {
      name: 'Street Edge',
      price: 5499,
      image: 'https://via.placeholder.com/300x200?text=Shoe+3',
    },
  ];
}
