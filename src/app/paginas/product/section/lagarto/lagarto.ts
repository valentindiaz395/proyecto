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
  // 🔹 Arreglo con la información de todos los lagartos
  public infolagarto: Animal[];

  constructor() {
    // Inicializa los datos de ejemplo
    this.infolagarto = [
      {
        id: 1,
        nombre: "Lagarto argentino",
        especie: "Lagarto",
        stock: 29,
        precio: 2500,
        img: "/img/l1.jpeg",
        alt: "Lagarto argentino",
        decripcion: "Lagarto argentino de hábitos diurnos, resistente y fácil de cuidar."
      },
      {
        id: 2,
        nombre: "Lagarto argentino",
        especie: "Lagarto",
        stock: 29,
        precio: 2500,
        img: "/img/l2.jpeg",
        alt: "Lagarto argentino",
        decripcion: "Ideal para terrarios amplios y soleados, muy activo y curioso."
      },
      {
        id: 3,
        nombre: "Lagarto argentino",
        especie: "Lagarto",
        stock: 29,
        precio: 2500,
        img: "/img/l3.jpeg",
        alt: "Lagarto argentino",
        decripcion: "Excelente para colecciones de reptiles, fácil de manejar."
      },
      {
        id: 4,
        nombre: "Lagarto argentino",
        especie: "Lagarto",
        stock: 29,
        precio: 2500,
        img: "/img/l4.jpeg",
        alt: "Lagarto argentino",
        decripcion: "Muy resistente y activo, perfecto para aficionados intermedios."
      }
    ];
  }

  // 🔹 Variable que almacena el producto seleccionado para mostrar en el modal
  productoseleccionado: any = null;

  /**
   * @description
   * Muestra más información de un producto.
   * Asigna el lagarto clickeado a 'productoseleccionado' para usarlo en el modal.
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
