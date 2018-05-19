import React from "react";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import Layout from "../../Components/SharedComponents/Layout";
import Canvas from "../../Components/Canvas";

storiesOf("Langton's ant", module).add("Playground", () => (
  <Layout>
    <Canvas width={1000} height={600} gridSize={5} speed={1} type="ant" />
  </Layout>
));
