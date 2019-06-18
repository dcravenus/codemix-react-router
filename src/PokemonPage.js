import React from "react";
import { Switch, Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import SelectPokemonPage from "./SelectPokemonPage";

const PokemonPage = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route
          path={`${match.path}/:name`}
          render={({ match }) => {
            return <Pokemon name={match.params.name} />;
          }}
        />
        <Route component={SelectPokemonPage} />
      </Switch>
    </div>
  );
};

export default PokemonPage;
