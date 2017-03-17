import React, { Component } from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import Screen from "./components/Screen";
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <Screen>
        <AppBar appName={"oolr"} />
        <HomePage />
      </Screen>
    );
  }
}

export default App;
