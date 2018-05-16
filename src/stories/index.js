import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Card from "../Components/SharedComponents/Card";
import Canvas from "../Components/Canvas";
import App from "../App";
import Creator from "../Components/Creator";
import Layout from "../Components/SharedComponents/Layout";
import {
  gliderGun,
  LWS,
  glider,
  beacon,
  block,
  beehive,
  loaf,
  boat,
  tub,
  blinker,
  toad,
  pulsar
} from "../consts/conway-types";

import { Button, Welcome } from "@storybook/react/demo";

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
      <Card name="BLOCK" gridSize={62.5} gridData={block} />
      <Card name="BEEHIVE" gridSize={42} gridData={beehive} />
      <Card name="LOAF" gridSize={42} gridData={loaf} />
      <Card name="BOAT" gridSize={50} gridData={boat} />
      <Card name="TUB" gridSize={50} gridData={tub} />
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
      <Card name="BLINKER" gridSize={50} gridData={blinker} />
      <Card name="TOAD" gridSize={42} gridData={toad} />
      <Card name="BEACON" gridSize={42} gridData={beacon} />
      <Card name="PULSAR" gridSize={15} gridData={pulsar} />
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

storiesOf("Langton's ant", module).add("Playground", () => (
  <Layout>
    <Canvas width={1000} height={600} gridSize={5} speed={1} type="ant" />
  </Layout>
));

storiesOf("Creator", module).add("Data grid", () => <Creator />);
