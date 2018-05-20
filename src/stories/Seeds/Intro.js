import { storiesOf } from "@storybook/react";
import React from "react";
import Markdown from "../../Components/SharedComponents/Markdown";
import markdown from "../../markdown/seeds.md";

storiesOf("Seeds", module).add("Intro", () => <Markdown>{markdown}</Markdown>);
