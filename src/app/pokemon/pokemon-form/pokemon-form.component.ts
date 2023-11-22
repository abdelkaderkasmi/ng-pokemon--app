import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonService } from '../../services/pokemon-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    PokemonTypeColorPipe,
    BorderCardDirective,
    CommonModule, 
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() 
  pokemon : Pokemon;
  types: string[]|undefined;

  constructor(
    private pokemonSvc: PokemonService,
    private router: Router
    ){}
  ngOnInit(): void {
    this.types = this.pokemonSvc.getPokemonTypes();
  }

  hasType(type: string):boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event,type :string){
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (isChecked){
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
    }
    
  }

  isTypesValid(type: string): boolean{
     if (this.pokemon.types.length==1 && this.hasType(type)){
      return false;
     }

     if(this.pokemon.types.length > 2 && !this.hasType(type) ){
      return false;
     }

     return true;
  }
  onSubmit(){
    console.log('Submit form');
    this.router.navigate(['/pokemon',this.pokemon.id]);
  }

}
