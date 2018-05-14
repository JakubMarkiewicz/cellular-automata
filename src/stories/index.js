import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Card from "../Components/SharedComponents/Card";
import Canvas from "../Components/Canvas";
import App from "../App";
import { gliderGun, LWS, glider, beacon } from "../consts/conway-types";

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
        flexWrap: "wrap",
        justifyContent: "space-around"
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
        flexWrap: "wrap",
        justifyContent: "space-around"
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
      <Card name="BEACON" gridSize={15} gridData={beacon} />
    </div>
  ))
  .add("Space Ships", () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      <Card name="GLIDER" gridSize={15} gridData={glider} />
      <Card name="LWS" gridSize={15} gridData={LWS} width={500} />
    </div>
  ))
  .add("Glider gun", () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      <Canvas
        width={480}
        height={350}
        gridSize={10}
        gridData={gliderGun}
        speed={50}
      />
    </div>
  ))
  .add("Playground", () => <App />);
