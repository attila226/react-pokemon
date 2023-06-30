import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import FilterablePokedexTable from "./FilterablePokedexTable";
import { pokemonArray } from "./pokemon";

function App() {
  return (
    <div className="App">
      <FilterablePokedexTable pokemonArray={pokemonArray} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
