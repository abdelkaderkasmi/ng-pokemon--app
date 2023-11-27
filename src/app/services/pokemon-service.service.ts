import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import POKEMONS from '../pokemon/mock-pokemon-list';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'

})
export class PokemonService {
readonly APIUrl=environment.ApiUrl;
  constructor(
    private http: HttpClient
  ){}
  

  getAll( ):Observable<Pokemon[]>{
      return this.http.get<Pokemon[]>(this.APIUrl+'GetAll').pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
      );
  }


  getById(id: number): Observable<Pokemon|undefined>{

    return this.http.get<Pokemon>(this.APIUrl+'getbyid?id='+ id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

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
