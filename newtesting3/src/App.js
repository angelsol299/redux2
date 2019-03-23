import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Headline from "./components/Headline/Headline";

const tempArr = [
  {
    firstName: "Angel",
    lastName: "Osoria",
    email: "angel@angel.com",
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header={1}
            desc="Click the button to render the posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
