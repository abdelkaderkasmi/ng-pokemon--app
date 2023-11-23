import {Pokemon} from './pokemon';
   
export const POKEMONS: Pokemon[] =
 [
 {
  Id: 1,
  Name: "Bulbizarre",
  Hp: 25,
  Cp: 5,
  Picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  Types: ["Plante", "Poison"],
  Created: new Date()
 },
 {
  Id: 2,
  Name: "Salamèche",
  Hp: 28,
  Cp: 6,
  Picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  Types: ["Feu"],
  Created: new Date()
 }
];
  
export default POKEMONS;