import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const styles = css`
  width: 96px;
  text-align: center;

  img {
    display: block;
  }
`;

const Pokemon = ({ name }) => {
  const [pokemonData, setPokemonData] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(resp => {
      resp.json().then(data => {
        setPokemonData(data);
      });
    });
  }, [name]);

  if (pokemonData) {
    return (
      <div css={styles}>
        <img src={pokemonData.sprites["front_default"]} />
        <p>{pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1)}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Pokemon;
