import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofert',
  standalone: true, // permite usar este componente sin declararlo en un módulo
  imports: [CommonModule],
  templateUrl: './ofert.html',
  styleUrls: ['./ofert.css'], // 🔹 corregido: era styleUrl (en singular)
})
export class Ofert {

  // 🔹 Variable que controla el título de la sección y de todas las tarjetas
  // Si este texto cambia, Angular actualiza automáticamente el título en el HTML.
  public tituloOferta: string = 'Ofertas increíbles';

  // 🔹 Arreglo que almacena los datos de los animales
  // Cada objeto del arreglo tiene la estructura del modelo 'Animal'
  public animalesOfertas: Animal[];

  constructor() {
    // Inicializamos el arreglo con 4 animales
    this.animalesOfertas = [
      {
        id: 1,
        nombre: "camaleon", // nombre mostrado en la tarjeta
        especie: "reptil",   // especie mostrada en la tarjeta
        stock: 2,            // cantidad disponible
        precio: 1000,        // precio del producto
        img: "/img/r1.jpeg", // ruta de la imagen
        alt: "Camaleón"      // texto alternativo para la imagen
      },
      {
        id: 3,
        nombre: "lagarto",
        especie: "reptil",
        stock: 3,
        precio: 900,
        img: "/img/l1.jpeg",
        alt: "Lagarto"
      },
      {
        id: 2,
        nombre: "gecko",
        especie: "reptil",
        stock: 5,
        precio: 800,
        img: "/img/g1.jpg",
        alt: "Gecko"
      },
      {
        id: 4,
        nombre: "camaleon verde",
        especie: "reptil",
        stock: 1,
        precio: 1200,
        img: "/img/camaleon4.jpg",
        alt: "Camaleón verde"
      }
    ];
  }

  /*
    🔹 Si quisieras cambiar el título dinámicamente:
    podrías agregar un método así:

    cambiarTitulo(nuevo: string) {
      this.tituloOferta = nuevo;
    }

    Y llamarlo desde un botón con:
    <button (click)="cambiarTitulo('Ofertas de reptiles!')">Cambiar título</button>
  */
}
