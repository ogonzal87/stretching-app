import React from "react";
import { render } from "react-dom";
import "./styles/_variables.scss";
import Card from "./components/card/card";
import Intervals from "./components/intervals/intervals";
import Button from "./components/button/button"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppActive: false
    };
  }

  startSession = () => {
    this.setState({
      isAppActive: true
    })
    setInterval(() => {
      //TODO: figure out what to do here.
    }, 2000);
    console.log("Stating session!");
  };

  render() {
    return (
      <div>
        <Card />
        <Intervals />
        <Button label="Start Session" handleClick={this.startSession}/>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
