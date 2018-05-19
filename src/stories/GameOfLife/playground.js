import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Card from "../../Components/SharedComponents/Card";
import { gliderGun } from "../../consts/conway-types";
import App from "../../App";

storiesOf("Conway's Game of Life", module).add("Playground", () => <App />);
