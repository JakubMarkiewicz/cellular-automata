// @flow
import React from "react";
import Parser from "html-react-parser";
import "../../Styles/markdown.css";

type Props = {
  children: React$Element<any>
};

const Markdown = ({ children }: Props) => (
  <div className="markdown__wrap">
    <div className="markdown">{Parser(children.toString())}</div>
  </div>
);

export default Markdown;
