import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "../../../Components/SharedComponents/Layout";
import Canvas from "../../../Components/Canvas";
import { one } from "../../../consts/wireworld-types";

storiesOf(`Wireworld/Examples`, module).add("#1", () => (
  <Layout>
    <Canvas
      width={500}
      height={500}
      gridSize={20}
      speed={100}
      type="wire"
      gridData={one}
    />
  </Layout>
));
