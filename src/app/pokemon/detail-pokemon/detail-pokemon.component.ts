import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import POKEMONS from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule,PokemonTypeColorPipe],
  templateUrl: 'detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {
  
  pokemonList : Pokemon[];
  pokemon: Pokemon  |undefined 
  constructor (
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonSvc: PokemonService
    ){}

  ngOnInit() {
    this.pokemonList=POKEMONS;
    const pokeId: string | null= this.route.snapshot.paramMap.get('id');
    
    if(pokeId){
    this.pokemonSvc.getById(+pokeId).subscribe(p => this.pokemon = p as Pokemon); 
    console.log(this.pokemon?.Name)  ;
    }
  }

  goToList(){
    this.router.navigate(['/pokemons']);
  }

  goToEdit(id: number){
    this.router.navigate(['/pokemon/edit/',id]);
   }
}
