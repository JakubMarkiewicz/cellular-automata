import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../../Components/SharedComponents/Card";
import { beehive, block, boat, loaf, tub } from "../../consts/conway-types";

storiesOf("Conway's Game of Life", module).add("Static", () => (
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
));
