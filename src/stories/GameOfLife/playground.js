import React from "react";
import { storiesOf } from "@storybook/react";
import App from "../../App";

storiesOf("Conway's Game of Life", module).add("Playground", () => <App />);
