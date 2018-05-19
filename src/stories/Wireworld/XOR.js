import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import Layout from "../../Components/SharedComponents/Layout";
import Canvas from "../../Components/Canvas";
import { XOR } from "../../consts/wireworld-types";

storiesOf("Wireworld", module).add("XOR", () => (
  <Layout>
    <Canvas
      width={800}
      height={600}
      gridSize={40}
      speed={500}
      type="wire"
      gridData={XOR}
    />
  </Layout>
));
