import React, { useState, useEffect } from "react";
import PokedexTable from "./PokedexTable";
import PokemonTypeSelection from "./PokemonTypeSelection";

export default function FilterablePokedexTable({ pokemonArray }) {
  const allPokemon = pokemonArray;
  const [type, setType] = useState("all");
  const [filteredPokemon, setPokemon] = useState(pokemonArray);

  const selectType = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    setPokemon(
      allPokemon.filter(
        (element) => type === "all" || element.types.includes(type)
      )
    );
  }, [type, allPokemon]);

  return (
    <>
      <PokemonTypeSelection selectedType={type} selectType={selectType} />
      <PokedexTable pokemonArray={filteredPokemon} />
    </>
  );
}
