import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      animals: ["Cats", "Dogs", "Horses", "Chickens", "Goats", "Donkeys"]
    };
  }

  render() {
    let animalsToDisplay = this.state.animals.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });

    return <div className="App">{animalsToDisplay}</div>

  }
}

export default App