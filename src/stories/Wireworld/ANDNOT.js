import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import Layout from "../../Components/SharedComponents/Layout";
import Canvas from "../../Components/Canvas";
import { NAND } from "../../consts/wireworld-types";

storiesOf("Wireworld", module).add("AND NOT", () => (
  <Layout>
    <Canvas
      width={900}
      height={600}
      gridSize={30}
      speed={500}
      type="wire"
      gridData={NAND}
    />
  </Layout>
));
