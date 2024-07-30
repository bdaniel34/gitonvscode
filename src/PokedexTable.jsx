import React from "react";
import PokemonRow from "./PokemonRow";

export default function PokedexTable({ bulbasaur }) {
  return (
    <div>
      {bulbasaur.map(parameter => (
        <PokemonRow bulbasaur={parameter} key={parameter.id}></PokemonRow>
      ))}
    </div>
  );
}
