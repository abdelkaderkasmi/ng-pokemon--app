import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of, tap } from 'rxjs';
import POKEMONS from '../pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(
    // private http: HttpClient
  ){}
  
  getAll( ):Pokemon[]{
    console.log(POKEMONS);
    return POKEMONS;
    // return this.http.get<Pokemon[]>('api/pokemons').pipe(
    //   tap((response)=>this.log(response)),
    //   catchError((error)=>this.handleError(error, []))
    // );
  }

  // getById(id:number):Observable<Pokemon|undefined>{
  //   return this.http.get<Pokemon>(`api/pokemon/${id}`).pipe(
  //     tap((response)=>this.log(response)),
  //     catchError((error)=>this.handleError(error, undefined))
  //   );
  // }

  private log(response: Pokemon[]|Pokemon|undefined){
    console.table(response);
  }

  private handleError(error: Error, errrorValue:any){
    console.log(error);
    return of(errrorValue);
  }

  getPokemonTypes(): string[]|undefined{
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte',
      'Normal',
      'Electrik', 
      'Poison', 
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
