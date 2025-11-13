import { Component } from '@angular/core'
import { Animal } from '../../../../models/animal'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-camaleones',
  imports: [CommonModule],
  templateUrl: './camaleones.html',
  styleUrl: './camaleones.css',
})
export class Camaleones {
  public infocamaleon: Animal[]
  constructor() {
    this.infocamaleon = [
      {
        id: 1,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/camaleon1.jpeg",
        alt: "espere",
        decripcion:""
      },
       {
        id: 2,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/camaleon2.jpeg",
        alt: "espere",
        decripcion:""
      },
       {
        id: 3,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/camaleon.jpeg",
        alt: "espere",
        decripcion:""
      },
       {
        id: 3,
        nombre: "lagarto argentino",
        especie: "lagarto",
        stock: 29,
        precio: 2000,
        img: "/img/camaleon4.jpg",
        alt: "espere",
        decripcion:""
      }
    ]

  }

  productoseleccionado:any = null;
  
  /**
   * 
   * 
   * @description metodo para ver mas informacion de un nproducto.
   * recibe como parametro un producto de tipi "any" y lo asigna a la variable 
   * "productosseleccionado"
   */
  vermas(producto:any){
    this.productoseleccionado = producto;
  }
}
