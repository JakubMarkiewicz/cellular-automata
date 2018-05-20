import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "../../Components/SharedComponents/Layout";
import Canvas from "../../Components/Canvas";
import { initSeeds } from "../../consts/seeds-types";

storiesOf("Seeds", module).add("Playground", () => (
  <Layout>
    <Canvas
      width={1000}
      height={600}
      gridSize={2}
      speed={100}
      type="seeds"
      gridData={initSeeds}
    />
  </Layout>
));
