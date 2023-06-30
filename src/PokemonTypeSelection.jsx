import React from "react";
import { types } from "./pokemon";

export default function PokemonTypeSelection({ selectedType, selectType }) {
  return (
    <div>
      Select a type:
      <select value={selectedType} onChange={selectType}>
        {[...types, "all"].sort().map((type) => (
          <option id={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
