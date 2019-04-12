import { Injectable } from '@angular/core';
import { HERO } from "@mocks/mock-heroes";
import { Hero } from "@classes/hero";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
    return HERO;
  }
}
