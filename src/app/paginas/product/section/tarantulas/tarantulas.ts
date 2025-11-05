import { Component } from '@angular/core';
import { Animal } from '../../../../models/animal';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tarantulas',
  imports: [CommonModule],
  templateUrl: './tarantulas.html',
  styleUrl: './tarantulas.css',
})
export class Tarantulas {
  public infotarantula: Animal[]
  constructor() {
    this.infotarantula = [
      {
        id: 1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt: "espere",
        decripcion: ""
      }
    ]

  }

}
