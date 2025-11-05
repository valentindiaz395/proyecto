import { Component } from '@angular/core';
import { Animal } from '../../../../models/animal';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-geckos',
  imports: [CommonModule],
  templateUrl: './geckos.html',
  styleUrl: './geckos.css',
})
export class Geckos {
  public infogeckos:Animal[]
  constructor() {
    this.infogeckos= [
      {
        id:1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt: "espere"
      }
      ]

}

}
