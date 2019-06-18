import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import Cat from "./Cat";
import PokemonPage from "./PokemonPage";
import ImportantPage from "./ImportantPage";
import ColorPage from "./ColorPage";

const AppRouter = () => {
  return (
    <Router>
      <header>
        <NavLink to="/" exact>
          Home
        </NavLink>

        <NavLink to="/cat">Cat</NavLink>

        <NavLink to="/pokemon">Pokemon</NavLink>

        <NavLink to="/important">Important Page</NavLink>

        <NavLink to="/color/red">Red</NavLink>
        <NavLink to="/color/blue">Blue</NavLink>
      </header>

      <Switch>
        <Route path="/" exact render={() => {}} />
        <Route path="/cat" component={Cat} />
        <Route path="/pokemon" component={PokemonPage} />
        <Route path="/important" component={ImportantPage} />
        <Route path="/color" component={ColorPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
