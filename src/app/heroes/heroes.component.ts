import { Component, OnInit } from '@angular/core';
import { HERO } from "@mocks/mock-heroes";
import { Hero } from "@classes/hero";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero : Hero = HERO[0];
  ngOnInit() {
  }

}
