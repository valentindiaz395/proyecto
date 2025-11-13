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
        img: "/img/g1.jpg",
        alt: "espere"
      },
         {
        id:1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/g2.jpg",
        alt: "espere"
      },
         {
        id:1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/g3.jpg",
        alt: "espere"
      },
         {
        id:1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/g4.jpg",
        alt: "espere"
      }
      ]

}

}
