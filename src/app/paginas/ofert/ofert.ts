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
        img:"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt:""
      },{
        id:3,
        nombre:"camaleon",
        especie:"reptil",
        stock:2,
        precio:1000,
        img:"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt:""
      },{
          id:2,
        nombre:"camaleon",
        especie:"reptil",
        stock:2,
        precio:1000,
        img:"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt:""

      },
      {
          id:4,
        nombre:"camaleon",
        especie:"reptil",
        stock:2,
        precio:1000,
        img:"https://images.unsplash.com/photo-1564349683136-77e08dba1ef7",
        alt:""
      }
    ]

  }

}
