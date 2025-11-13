import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Mensaje } from '../../models/mensaje';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  nuevomensaje = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl("",Validators.required),
    mensaje: new FormControl("",Validators.required)

  });

  coleccionmensajes: Mensaje[] = [];

  private contadorid = 1;

  /**
   * @description Crea una nueva tarjeta y la agrega al arreglo de productos
   */
  enviarMensaje() {
    if (this.nuevomensaje.valid) {
      const nuevomensaje: Mensaje = {
        id: this.contadorid++,
        nombre: this.nuevomensaje.value.nombre!,
        apellido: this.nuevomensaje.value.apellido!,
        email: this.nuevomensaje.value.email!,
        mensaje:this.nuevomensaje.value.mensaje!

      };
      this.coleccionmensajes.push(nuevomensaje);
      alert("se envio tu mensaje se ha enviado correctamente")

      console.log("mensaje agregado: ", nuevomensaje);
      console.log("estado de la coleccion actual: ", this.coleccionmensajes);
      this.nuevomensaje.reset();
    }
  }
}
