// @flow

import React from "react";
import "../../Styles/layout.css";

type Props = {
  children?: React$Element<any>
};
const Layout = ({ children }: Props) => (
  <div className="layout">{children}</div>
);

export default Layout;
