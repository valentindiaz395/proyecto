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
        img: "/img/t2.jpeg",
        alt: "espere",
        decripcion: ""
      },
       {
        id: 1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/t3.jpg",
        alt: "espere",
        decripcion: ""
      },{
        id: 1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/t4.jpg",
        alt: "espere",
        decripcion: ""
      }
       ,{
        id: 1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/t1.jpg",
        alt: "espere",
        decripcion: ""
      }
       
      
    ]

  }

}
