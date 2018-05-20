import { storiesOf } from "@storybook/react";
import React from "react";
import Markdown from "../../Components/SharedComponents/Markdown";
import markdown from "../../markdown/brain.md";

storiesOf("Brian's Brain", module).add("Intro", () => (
  <Markdown>{markdown}</Markdown>
));
