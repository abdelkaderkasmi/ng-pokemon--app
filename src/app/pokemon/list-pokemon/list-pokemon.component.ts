import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import POKEMONS from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: 'list-pokemon.component.html',
  standalone:true,
  imports: [PokemonTypeColorPipe,BorderCardDirective,CommonModule]
})
export class ListPokemonComponent  {
  pokemonList: Pokemon[] = POKEMONS;

  constructor (private router:Router){

  }
  goDetail(pokemon: Pokemon){
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}