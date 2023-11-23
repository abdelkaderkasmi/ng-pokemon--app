import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import POKEMONS from '../mock-pokemon-list';
import { BorderCardDirective } from '../border-card.directive';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon-service.service';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: 'list-pokemon.component.html',
  standalone:true,
  imports: [PokemonTypeColorPipe,BorderCardDirective,CommonModule]
})
export class ListPokemonComponent  implements OnInit {
  pokemonList: Pokemon[];

  constructor (
    private router:Router,
    private pokemonSvc: PokemonService
    ){

  }
  ngOnInit(): void {
    this.pokemonSvc.getAll().subscribe(list => this.pokemonList = list as Pokemon[]); 
    console.table(this.pokemonList);
  }

  goDetail(pokemon: Pokemon){
    this.router.navigate(['/pokemon',pokemon.Id]);
  }
}