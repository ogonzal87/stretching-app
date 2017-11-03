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
      isAppActive: false,
      intervalCounter: 0,
      totalTime: 0,
      intervals: []
    };
  }

  startSession = () => {
    this.setState({
      isAppActive: true
    });
    if ( !this.state.isAppActive ) {
      setInterval(() => {
        this.setState({
          intervalCounter: this.state.intervalCounter + 1
        })
        if (this.state.intervalCounter === 3 || this.state.intervalCounter === 6) {
          this.state.intervals.push("pushed!");
        } 
        console.log(this.state.intervals);
      }, 1000);
    }  

  }


  //Start Interval
      //App is active = true
      //Start a setInterval for 3 seconds
      //Every 3 seconds, push an obaject to the 

  //Stop Interval
      //App is active = false
      //Stop inteval and reset to 0
  

  //Start Total clock


  //Stop Total clock

  // startSession = () => {
  //   this.setState({
  //     isAppActive: true
  //   });
  //   if (!this.state.isAppActive) {
  //     setInterval(() => {
  //       this.setState({
  //         intervalCounter: this.state.intervalCounter - 1,
  //         totalTime: this.state.totalTime + 1
  //       });
  //     }, 1000);
  //   }
  // };

  render() {
    return (
      <div>
        <Card
          intervalCountDown={this.state.intervalCounter}
          intervalCompleted={this.state.intervalCompleted}
          totalTime={this.state.totalTime}
        />
        <Intervals />
        <Button label="Iniciar Sesion" handleClick={this.startSession} />
        <Button label="Stop Sesion" handleClick={this.stopSession} />
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
