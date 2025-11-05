import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  public infoAnimal: Animal[]
  constructor() {
    this.infoAnimal = [
      {
        id:1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt: "espere",
        decripcion:"ver mas"

      }
      ,
      {
        id:2,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt: "espere",
                decripcion:"ver mas"

      },
      {
        id:3,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt: "espere", 
        decripcion:"ver mas"

      },
      {
        id:4,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt: "espere",
        decripcion:"ver mas"

      },
      {
        id:5,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt: "espere",
        decripcion:"ver mas"
      }

    ]
  }

  


  
}
