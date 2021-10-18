import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  // hero = 'Carlos The Great';
/* Passou de string a objecto, a página não demonstra bem o atributo por ser um objecto
 */
  hero: Hero = {
    id: 1,
    name: 'Carlos The Great'
  };

  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  heroes = HEROES;

  constructor() { }
  
  ngOnInit(): void {
  }
  
}
