import React from "react";
 
import PokedexTable from "./PokedexTable";
export default function App() {
  const bulbasaur = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass", "poison"],
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: 2,
      name: "Ivysaur",
      types: ["grass", "poison"],
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      id: 3,
      name: "Venusaur",
      types: ["grass", "poison"],
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    // Add more Pokémon objects as needed
    {
      id: 4,
      name: "Venusaur",
      types: ["grass", "poison"],
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      id: 5,
      name: "Venusaur",
      types: ["grass", "poison"],
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
  ];
  return (
    <div>
      <PokedexTable  bulbasaur={bulbasaur}/>
    </div>
  );
}
