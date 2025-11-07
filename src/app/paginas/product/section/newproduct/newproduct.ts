import { Component } from '@angular/core';
import { FormGroup,FormControl,ReactiveFormsModule,Validators } from '@angular/forms';
import { Tarjeta } from '../../../../models/tarjeta';
/*
FormGroup:directiva de formularios que agrupa una serie de datos
,FormControl:utilizando en conjunto con FormGroup para tomar valor de una propiredad individual en un formulario
,ReactiveFormsModule: activa el uso de formularios reactivo-> se ejecutan mediante una accion y se relacion HTML (interfaz graficas) con TS (LOGICA)
,Validators: pide que un valor exista o sea validado como necesaario
*/

@Component({
  selector: 'app-newproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './newproduct.html',
  styleUrl: './newproduct.css',
})
export class Newproduct {
  nuevoproducto= new FormGroup({
    titulo: new FormControl('',Validators.required),
    descripcion:new FormControl('',Validators.required),
    precio: new FormControl(null,Validators.required),
    img: new FormControl(''),
    alt:new FormControl('')
  })
  /*
  coleccionar productos  de tipo tajerta (respeta la estructura de la)
  */
  coleccionproductos:Tarjeta[]=[];

  private contadorid=1

}
