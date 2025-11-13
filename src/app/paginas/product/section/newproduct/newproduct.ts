import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarjeta } from '../../../../models/tarjeta';
import { CommonModule } from '@angular/common';
/*
FormGroup:directiva de formularios que agrupa una serie de datos
,FormControl:utilizando en conjunto con FormGroup para tomar valor de una propiredad individual en un formulario
,ReactiveFormsModule: activa el uso de formularios reactivo-> se ejecutan mediante una accion y se relacion HTML (interfaz graficas) con TS (LOGICA)
,Validators: pide que un valor exista o sea validado como necesaario
*/

@Component({
  selector: 'app-newproduct',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './newproduct.html',
  styleUrl: './newproduct.css',
})
export class Newproduct {
  nuevoproducto = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(''),
    alt: new FormControl('')
  })
  /*
  coleccionar productos  de tipo tajerta (respeta la estructura de la)
  */
  coleccionproductos: Tarjeta[] = [];

  private contadorid = 1

  /**
   * @description
   */
  creartarjeta() {
    if (this.nuevoproducto.valid) {
      const nuevaTarjeta: Tarjeta = {
        id: this.contadorid++,
        titulo: this.nuevoproducto.value.titulo!,
        descripcion: this.nuevoproducto.value.descripcion!,
        precio: this.nuevoproducto.value.precio!
      }
      this.coleccionproductos.push(nuevaTarjeta)

      console.log("nueva tarjeta agregada: ", nuevaTarjeta);
      console.log("estado de la coleccion actual: ", this.coleccionproductos);
      this.nuevoproducto.reset();
    }

  }

}
