import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Headline from "./components/Headline/Headline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data-test="headerComponent" />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render the posts"
          />
        </section>
      </div>
    );
  }
}

export default App;
