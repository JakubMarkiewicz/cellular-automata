import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../../Components/SharedComponents/Card";
import { glider, LWS } from "../../consts/conway-types";

storiesOf("Conway's Game of Life", module).add("Space Ships", () => (
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
));
