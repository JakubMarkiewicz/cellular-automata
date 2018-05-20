import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../../Components/SharedComponents/Card";
import { blinker, toad, beacon, pulsar } from "../../consts/conway-types";

storiesOf("Conway's Game of Life", module).add("Oscilators", () => (
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
));
