import React from "react";

function typeToColor(type) {
  const colors = {
    grass: "#9bcc50",
    poison: "#b97fc9",
    flying: "",
    water: "",
    bug: "",
    fire: "#fd7d24",
    normal: "#a4acaf",
    electric: "#e6bc2f",
    ground: "",
    fairy: "#fdb9e9"
  };

  return colors[type];
}

export default function PokemonRow({ pokemon }) {
  return (
    <div style={{ paddingTop: "15px" }}>
      <img
        style={{ backgroundColor: "aliceblue" }}
        height="100"
        src={pokemon.sprite}
        alt={pokemon.name}
      />
      <div
        style={{ fontSize: "80%", color: "#919191", fontFamily: "Flexo-Bold" }}
      >
        #{pokemon.id}
      </div>
      <h5 style={{ fontFamily: "Flexo-Demi", fontSize: "145%", margin: "5px" }}>
        {pokemon.name}
      </h5>
      <div>
        {pokemon.types.map((type) => {
          const style = {
            borderRadius: 3,
            backgroundColor: typeToColor(type),
            padding: "2px 5px",
            margin: "2px",
            fontSize: "11px"
          };
          return <span style={style}>{type}</span>;
        })}
      </div>
    </div>
  );
}
