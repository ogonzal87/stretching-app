import React from "react";
import "./interval.scss";

class Interval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      isCompleted: false
    };
  }

  intervalCompleted = () => {
    this.setState({
      isCompleted: true
    });
  }

  isIntervalCompleted = () => {
    return this.state.isCompleted ? "interval_completed" : "interval";
  }

  render() {
    return <div>
        <div className={this.isIntervalCompleted()} onClick={this.intervalCompleted}>
          {this.state.number}
        </div>
      </div>;
  }
}

export default Interval;  