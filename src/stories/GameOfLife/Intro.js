import { storiesOf } from "@storybook/react";
import React from "react";
import Markdown from "../../Components/SharedComponents/Markdown";
import markdown from "../../markdown/game-of-life.md";

storiesOf("Conway's Game of Life", module).add("Intro", () => (
  <Markdown>{markdown}</Markdown>
));
