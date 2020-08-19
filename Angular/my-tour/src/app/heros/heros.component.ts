import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { Heros } from '../mock-heros'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor() {
    this.heros = Heros;
    // this.selectedHero = {
    //   id: 1,
    //   name: 'Soumik Ghosh'
    // };
  }
  heros;
  showModel;
  selectedHero: Hero
  ngOnInit(): void {
  }
  onclick(hero) {
    this.selectedHero = hero;
    this.showModel = true;
  }

}
