import React from "react";
import "./intervals.scss";
import Interval from "./Interval/interval.js"

class Intervals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCompleted: props.intervalCompleted
    }   
  }
  
  render() {
    return (
      <div className="intervals" >
        <Interval number={1} isCompleted={this.state.isCompleted} />
        <Interval number={2} />
        <Interval number={3} />
        <Interval number={4} />
        <Interval number={5} />
        <Interval number={6} />
        <Interval number={7} />
        <Interval number={8} />
        <Interval number={9} />
        <Interval number={10} />
      </div>
    )
  };
}

export default Intervals;