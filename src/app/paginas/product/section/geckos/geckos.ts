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
  // 🔹 Arreglo con la información de todos los geckos
  public infogeckos: Animal[];

  constructor() {
    // Inicializa los datos de ejemplo
    this.infogeckos = [
      {
        id: 1,
        nombre: "Gecko leopardo",
        especie: "Eublepharis macularius",
        stock: 12,
        precio: 2500,
        img: "/img/g1.jpg",
        alt: "Gecko leopardo",
        decripcion: "Un gecko dócil y popular por su colorido patrón de manchas. Perfecto para principiantes."
      },
      {
        id: 2,
        nombre: "Gecko crestado",
        especie: "Correlophus ciliatus",
        stock: 8,
        precio: 3000,
        img: "/img/g2.jpg",
        alt: "Gecko crestado",
        decripcion: "Con crestas a los lados de su cabeza, es un reptil único y fácil de cuidar."
      },
      {
        id: 3,
        nombre: "Gecko tokay",
        especie: "Gekko gecko",
        stock: 5,
        precio: 2800,
        img: "/img/g3.jpg",
        alt: "Gecko tokay",
        decripcion: "Famoso por su fuerte voz y colores brillantes. Ideal para cuidadores experimentados."
      },
      {
        id: 4,
        nombre: "Gecko dorado",
        especie: "Gekko ulikovskii",
        stock: 10,
        precio: 2700,
        img: "/img/g4.jpg",
        alt: "Gecko dorado",
        decripcion: "De tonos amarillos brillantes, muy activo y curioso. Le encanta trepar por su terrario."
      }
    ];
  }

  // 🔹 Variable que almacena el producto seleccionado para mostrar en el modal
  productoseleccionado: any = null;

  /**
   * @description
   * Muestra más información de un producto.
   * Asigna el gecko clickeado a 'productoseleccionado' para usarlo en el modal.
   */
  vermas(producto: any) {
    this.productoseleccionado = producto;
  }

  /**
   * @description
   * Simula la compra de un producto.
   * Muestra un mensaje de confirmación y lo imprime en la consola.
   */
  comprar(producto: any) {
    console.log("Producto comprado:", producto.nombre);
    alert(`🦎 ¡Has agregado ${producto.nombre} al carrito por $${producto.precio}!`);
  }
}
