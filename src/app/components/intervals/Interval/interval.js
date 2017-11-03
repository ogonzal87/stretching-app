import React from "react";
import "./interval.scss";

class Interval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      isCompleted: props.isCompleted
    };
  }

  isIntervalCompleted = () => {
    return this.state.isCompleted ? "interval_completed" : "interval";
  }

  render() {
    return <div>
        <div className={this.isIntervalCompleted()}>
          {this.state.number}
        </div>
      </div>;
  }
}

export default Interval;  