import React from "react";
import { Link } from "react-router-dom";

const SelectPokemonPage = () => {
  const [pokemonName, setPokemonName] = React.useState("");

  const handleNameChange = event => {
    setPokemonName(event.target.value);
  };

  return (
    <div>
      Type the name of a Pokémon:{" "}
      <input type="text" value={pokemonName} onChange={handleNameChange} />{" "}
      <Link to={`/pokemon/${pokemonName}`}>Go</Link>
    </div>
  );
};

export default SelectPokemonPage;
