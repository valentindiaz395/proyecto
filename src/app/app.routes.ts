import { Component } from '@angular/compiler';
import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { About } from './paginas/about/about';
import { Product } from './paginas/product/product';
import { Contact } from './paginas/contact/contact';
import { Ofert } from './paginas/ofert/ofert';

export const routes: Routes = [
	{path:`` , component : Home},
	{path:`home` , component : Home},
	{path:`about` , component : About},
	{path:`product` , component : Product},
	{path:`contact` , component : Contact},
	{path:`ofert` , component : Ofert}
];
