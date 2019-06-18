import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Cat from "./Cat";
import Pokemon from "./Pokemon";
import SelectPokemonPage from "./SelectPokemonPage";
import ImportantRoute from "./ImportantRoute";
import ColorPage from "./ColorPage";

const headerStyles = css`
  background: lightgray;
  padding: 10px;
  margin-bottom: 10px;

  a {
    color: black !important;
    font-size: 20px;
    padding: 0 10px;
    text-decoration: none;
  }
  a.active {
    font-weight: bold;
  }
`;

const AppRouter = () => {
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

  return (
    <Router>
      <header id="foo" css={headerStyles}>
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
        <Route path="/important" component={ImportantRoute} />

        <Route path="/color" component={ColorPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
