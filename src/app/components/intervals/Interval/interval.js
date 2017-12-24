import React from "react";
import "./interval.scss";

class Interval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      intervalTriggerListener: props.triggerListener,
      isCompleted: false,
    };
    this.startInterval();
  }

  //listen for a trigger and start the counter
  startInterval = () => {
    if (this.state.intervalTriggerListener) {
      setTimeout(() => {
        console.log("oscar")
      }, 1000)
    }
  }
  
  //trigger a counter


  //listen for when the counter reaches 30 seconds and chage the state to done. 
  changeState = () => {
    this.setState({
      isCompleted: true
    }); 
  }

  isIntervalCompleted = () => {
    return this.state.isCompleted ? "interval_completed" : "interval";
  };

  render() {
    return <div>
      <div className={this.isIntervalCompleted()}>{this.state.number}</div>
      </div>;
  }
}

export default Interval;  