import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "../../Components/SharedComponents/Layout";
import Canvas from "../../Components/Canvas";
import { test } from "../../consts/wireworld-types";

storiesOf("Wireworld", module).add("Playground", () => (
  <Layout>
    <Canvas
      width={1000}
      height={500}
      gridSize={50}
      speed={100}
      type="wire"
      gridData={test}
    />
  </Layout>
));
