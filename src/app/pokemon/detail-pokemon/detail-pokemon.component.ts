import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import POKEMONS from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule,PokemonTypeColorPipe],
  templateUrl: 'detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  
  pokemonList : Pokemon[];
  pokemon: Pokemon  |undefined 
  constructor (private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.pokemonList=POKEMONS;
    const pokeId: string | null= this.route.snapshot.paramMap.get('id');
    
    if(pokeId){
    this.pokemon=  this.pokemonList.find(p=>p.Id == +pokeId);
    }
  }

  goToList(){
    this.router.navigate(['/pokemons']);
  }

  goToEdit(id: number){
    this.router.navigate(['/pokemon/edit/',id]);
   }
}
