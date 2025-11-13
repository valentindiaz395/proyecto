import { Component } from '@angular/compiler';
import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { About } from './paginas/about/about';
import { Product } from './paginas/product/product';
import { Contact } from './paginas/contact/contact';
import { Ofert } from './paginas/ofert/ofert';
import { Camaleones } from './paginas/product/section/camaleones/camaleones';
import { Geckos } from './paginas/product/section/geckos/geckos';
import { Lagarto } from './paginas/product/section/lagarto/lagarto';
import { Ranas } from './paginas/product/section/ranas/ranas';
import { Serpiente } from './paginas/product/section/serpiente/serpiente';
import { Tarantulas } from './paginas/product/section/tarantulas/tarantulas';
import { Newproduct } from './paginas/product/section/newproduct/newproduct';

export const routes: Routes = [
	{path:`` , component : Home},
	{path:`home` , component : Home},
	{path:`about` , component : About},
	{path:`product` , component : Product},
	{path:`contact` , component : Contact},
	{path:`ofert` , component : Ofert},
	{path:`section/camaleones` , component : Camaleones},
	{path:`section/geckos` , component : Geckos},
    {path:`section/lagarto` , component : Lagarto},
    {path:`section/ranas` , component : Ranas},
	{path:`section/serpiente` , component : Serpiente},
	{path:`section/tarantulas` , component : Tarantulas},
	{path:`section/newproduct` , component : Newproduct}
];
