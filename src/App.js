import React, { Component } from "react";
import Layout from "./Components/SharedComponents/Layout";
import Canvas from "./Components/Canvas";

class App extends Component {
  render() {
    return (
      <Layout>
        <Canvas width={1000} height={600} gridSize={5} speed={50} />
      </Layout>
    );
  }
}

export default App;
