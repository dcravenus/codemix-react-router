import React from "react";
import { Link } from "react-router-dom";

const SelectPokemonPage = () => {
  const [pokemonName, setPokemonName] = React.useState("");
  const linkRef = React.createRef();

  const handleNameChange = event => {
    setPokemonName(event.target.value);
  };

  const handleInputKeyUp = event => {
    if (event.keyCode === 13) {
      linkRef.current.click();
    }
  };

  return (
    <div>
      Type the name of a Pokémon:{" "}
      <input
        type="text"
        value={pokemonName}
        onChange={handleNameChange}
        onKeyUp={handleInputKeyUp}
      />{" "}
      <Link to={`/pokemon/${pokemonName}`} innerRef={linkRef}>
        Go
      </Link>
    </div>
  );
};

export default SelectPokemonPage;
