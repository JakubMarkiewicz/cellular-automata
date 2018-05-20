import { storiesOf } from "@storybook/react";
import React from "react";
import Markdown from "../../Components/SharedComponents/Markdown";
import markdown from "../../markdown/wireworld.md";

storiesOf("Wireworld", module).add("Intro", () => (
  <Markdown>{markdown}</Markdown>
));
