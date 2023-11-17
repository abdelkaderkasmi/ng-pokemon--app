import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonModule } from './pokemon/pokemon.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports:[CommonModule,RouterOutlet],
  standalone:true
})
export class AppComponent {}