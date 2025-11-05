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
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt: "espere",
        decripcion:""
      }
    ]

  }

  productoseleccionado:any = null;
  
  /**
   * 
   * 
   * @descriptionmetodoi para ver mas informacion de un nproducto.
   * recibe como parametro un producto de tipi "any" y lo asigna a la variable 
   * "productosseleccionado"
   */
  vermas(producto:any){
    this.productoseleccionado = producto;
  }
}
