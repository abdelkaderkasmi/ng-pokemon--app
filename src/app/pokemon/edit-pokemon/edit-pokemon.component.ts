import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon-service.service';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-edit-pokemon',
    standalone: true,
    template: `
    <h2 class="center" >
      Editer {{pokemon?.Name}}
    </h2>

      <p *ngIf="pokemon" class="center">
        <img [src]="pokemon.Picture">
      </p>
      <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
    styles: ``,
    imports: [CommonModule, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon| undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonSvc: PokemonService
  ){}

  ngOnInit() {
    const id: string | null= this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id){
       this.pokemonSvc.getById(+id).subscribe(p=>this.pokemon = p);

    }else{
      this.pokemon= undefined;
    }
  }
}
