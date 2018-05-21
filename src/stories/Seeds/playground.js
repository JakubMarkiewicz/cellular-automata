import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "../../Components/SharedComponents/Layout";
import Canvas from "../../Components/Canvas";

storiesOf("Seeds", module).add("Playground", () => (
  <Layout>
    <Canvas width={1000} height={600} gridSize={5} speed={50} type="seeds" />
  </Layout>
));
