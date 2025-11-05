
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../../../models/animal';


@Component({
  selector: 'app-ranas',
  imports: [CommonModule],
  templateUrl: './ranas.html',
  styleUrl: './ranas.css',
})
export class Ranas {
   public inforana:Animal[]
    constructor() {
      this.inforana= [
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

}}

