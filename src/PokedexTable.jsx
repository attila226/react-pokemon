import React from "react";
import PokemonRow from "./PokemonRow";

export default function PokedexTable({ pokemonArray }) {
  return (
    <table>
      <tr>
        <td>
          {pokemonArray.map((pokemon) => (
            <PokemonRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </td>
      </tr>
    </table>
  );
}
