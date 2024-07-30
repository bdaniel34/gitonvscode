import React from "react";
import "./App.css"
export default function PokemonRow({ bulbasaur }) {
  return (
    <div>
      <h1>{bulbasaur.id}</h1>
      <h2>{bulbasaur.name}</h2>
      <h3>{bulbasaur.types}</h3>
      <img src={bulbasaur.sprite}></img>
    </div>
  );
}
