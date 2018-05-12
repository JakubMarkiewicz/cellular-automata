import React, { Component } from "react";
import Layout from "./Components/SharedComponents/Layout";
import Canvas from "./Components/Canvas";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Canvas />
      </Layout>
    );
  }
}

export default App;
