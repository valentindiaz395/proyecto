import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofert',
  imports: [CommonModule],
  templateUrl: './ofert.html',
  styleUrl: './ofert.css',
})
export class Ofert {
  public animalesOfertas:Animal[]
  constructor(){
    this.animalesOfertas=[
      {
        id:1,
        nombre:"camaleon",
        especie:"reptil",
        stock:2,
        precio:1000,
        img:"/img/r1.jpeg",
        alt:""
      },{
        id:3,
        nombre:"camaleon",
        especie:"reptil",
        stock:2,
        precio:1000,
        img:"/img/l1.jpeg",
        alt:""
      },{
          id:2,
        nombre:"camaleon",
        especie:"reptil",
        stock:2,
        precio:1000,
        img:"/img/g1.jpg",
        alt:""

      },
      {
          id:4,
        nombre:"camaleon",
        especie:"reptil",
        stock:2,
        precio:1000,
        img:"/img/camaleon4.jpg",
        alt:""
      }
    ]

  }

}
