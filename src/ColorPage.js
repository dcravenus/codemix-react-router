import React from "react";
import { Switch, Route } from "react-router-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ColorPage = () => {
  const [color, setColor] = React.useState("");
  return (
    <div
      css={css`
        background-color: ${color};
        width: 100px;
        height: 100px;
        transition: background-color 1s;
      `}
    >
      <Switch>
        <Route
          path="/color/:color"
          render={({ match }) => {
            setColor(match.params.color);
          }}
        />
      </Switch>
    </div>
  );
};

export default ColorPage;
