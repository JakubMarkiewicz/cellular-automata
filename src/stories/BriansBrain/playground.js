import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "../../Components/SharedComponents/Layout";
import Canvas from "../../Components/Canvas";
import { randomCenterFill, build2DArray } from "../../lib/utils";

storiesOf("Brian's Brain", module).add("Playground", () => (
  <Layout>
    <Canvas width={1000} height={600} gridSize={5} speed={50} type="brain" />
  </Layout>
));
