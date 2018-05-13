import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Card from "../Components/SharedComponents/Card";
import App from "../App";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Conway's Game of Life", module)
  .add("Static", () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}
    >
      <Card
        name="BLOCK"
        gridSize={62.5}
        gridData={[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]}
      />
      <Card
        name="BEEHIVE"
        gridSize={42}
        gridData={[
          [0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0]
        ]}
      />
      <Card
        name="LOAF"
        gridSize={42}
        gridData={[
          [0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 0, 0],
          [0, 1, 0, 0, 1, 0],
          [0, 0, 1, 0, 1, 0],
          [0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0]
        ]}
      />
      <Card
        name="BOAT"
        gridSize={50}
        gridData={[
          [0, 0, 0, 0, 0],
          [0, 1, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0]
        ]}
      />
      <Card
        name="LOAF"
        gridSize={50}
        gridData={[
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 1, 0, 1, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0]
        ]}
      />
    </div>
  ))
  .add("Oscilators", () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}
    >
      <Card
        name="BLINKER"
        gridSize={50}
        gridData={[
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0]
        ]}
      />
      <Card
        name="TOAD"
        gridSize={42}
        gridData={[
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 0],
          [0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0]
        ]}
      />
      <Card
        name="BEACON"
        gridSize={42}
        gridData={[
          [0, 0, 0, 0, 0, 0],
          [0, 1, 1, 0, 0, 0],
          [0, 1, 1, 0, 0, 0],
          [0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 0]
        ]}
      />
    </div>
  ))
  .add("Playground", () => <App />);
