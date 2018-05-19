import { gliderGun } from "../../consts/conway-types";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import Canvas from "../../Components/Canvas";
import Card from "../../Components/SharedComponents/Card";
import React from "react";

storiesOf("Conway's Game of Life", module).add("Glider gun", () => (
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
));
