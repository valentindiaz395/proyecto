import { Component } from '@angular/core'
import { Animal } from '../../../../models/animal'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-camaleones',
  imports: [CommonModule],
  templateUrl: './camaleones.html',
  styleUrl: './camaleones.css', // ⚠️ se mantiene igual como pediste
})
export class Camaleones {
  // 🔹 Arreglo con todos los camaleones o productos a mostrar
  public infocamaleon: Animal[]

  constructor() {
    this.infocamaleon = [
      {
        id: 1,
        nombre: "Lagarto argentino",
        especie: "Lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/camaleon1.jpeg",
        alt: "Lagarto argentino",
        decripcion: "Un lagarto dócil y fácil de cuidar. Ideal para principiantes en reptiles."
      },
      {
        id: 2,
        nombre: "Camaleón del desierto",
        especie: "Camaleón",
        stock: 15,
        precio: 2500,
        img: "/img/camaleon2.jpeg",
        alt: "Camaleón del desierto",
        decripcion: "Camaleón de color arena, perfecto para ambientes secos y cálidos."
      },
      {
        id: 3,
        nombre: "Camaleón verde",
        especie: "Camaleón",
        stock: 12,
        precio: 2300,
        img: "/img/camaleon.jpeg",
        alt: "Camaleón verde",
        decripcion: "Camaleón tropical con tonos verdes brillantes que se adapta a la humedad."
      },
      {
        id: 4,
        nombre: "Camaleón pantera",
        especie: "Camaleón",
        stock: 8,
        precio: 3200,
        img: "/img/camaleon4.jpg",
        alt: "Camaleón pantera",
        decripcion: "Camaleón exótico de colores intensos y mirada impresionante."
      }
    ]
  }

  // 🔹 Guarda el producto seleccionado para mostrarlo en el modal
  productoseleccionado: any = null;
  
  /**
   * @description Método para ver más información de un producto.
   * Recibe un producto y lo asigna a la variable 'productoseleccionado'.
   * Esto permite mostrar sus datos en el modal.
   */
  vermas(producto: any) {
    this.productoseleccionado = producto;
  }

  /**
   * @description Método que simula la acción de comprar un producto.
   * Por ahora muestra el nombre en consola, pero podría conectarse con un carrito real.
   */
  comprar(producto: any) {
    console.log("Producto comprado:", producto.nombre);
    alert(`¡Has comprado ${producto.nombre} por $${producto.precio}! 🦎`);
  }
}
