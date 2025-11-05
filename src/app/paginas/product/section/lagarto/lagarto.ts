import { Component } from '@angular/core';
import { Animal } from '../../../../models/animal';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lagarto',
  imports: [CommonModule],
  templateUrl: './lagarto.html',
  styleUrl: './lagarto.css',
})
export class Lagarto {
   public infolagarto:Animal[]
  constructor() {
    this.infolagarto= [
      {
        id:1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2500,
        img: "/img/OIP.jpeg",
        alt: "espere"
      }
      ]

}

}
