import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import Layout from "../../Components/SharedComponents/Layout";
import Canvas from "../../Components/Canvas";
import { init } from "../../consts/briansBrain-types";

storiesOf("Brian's Brain", module).add("Playground", () => (
  <Layout>
    <Canvas
      width={1000}
      height={600}
      gridSize={2}
      speed={100}
      type="brain"
      gridData={init}
    />
  </Layout>
));
