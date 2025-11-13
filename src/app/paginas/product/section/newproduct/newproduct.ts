import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarjeta } from '../../../../models/tarjeta';
import { CommonModule } from '@angular/common';
/*
FormGroup: directiva de formularios que agrupa una serie de datos.
FormControl: se usa con FormGroup para tomar valor de una propiedad individual en un formulario.
ReactiveFormsModule: activa el uso de formularios reactivos -> se ejecutan mediante acciones y relacionan HTML (interfaz gráfica) con TS (lógica).
Validators: valida campos, por ejemplo, que sean requeridos o cumplan condiciones.
*/

@Component({
  selector: 'app-newproduct',
  standalone: true, // 🔹 NECESARIO si usas 'imports' dentro del decorador
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './newproduct.html',
  styleUrls: ['./newproduct.css'], // 🔹 'styleUrl' → 'styleUrls' (en plural)
})
export class Newproduct {
  nuevoproducto = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(''),
    alt: new FormControl('')
  });

  /*
  coleccionar productos de tipo tarjeta (respeta la estructura del modelo Tarjeta)
  */
  coleccionproductos: Tarjeta[] = [];

  private contadorid = 1;

  /**
   * @description Crea una nueva tarjeta y la agrega al arreglo de productos
   */
  creartarjeta() {
    if (this.nuevoproducto.valid) {
      const nuevaTarjeta: Tarjeta = {
        id: this.contadorid++,
        titulo: this.nuevoproducto.value.titulo!,
        descripcion: this.nuevoproducto.value.descripcion!,
        precio: this.nuevoproducto.value.precio!
      };
      this.coleccionproductos.push(nuevaTarjeta);

      console.log("nueva tarjeta agregada: ", nuevaTarjeta);
      console.log("estado de la coleccion actual: ", this.coleccionproductos);
      this.nuevoproducto.reset();
    }
  }
}
