import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
    {path:'pokemons',component:ListPokemonComponent},
    {path:'pokemon/:id',component:DetailPokemonComponent},
    {path:'pokemon/edit/:id',component:EditPokemonComponent},
    {path:'', redirectTo:'pokemons',pathMatch: 'full'},
    {path:'**',component:PageNotFoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{}
