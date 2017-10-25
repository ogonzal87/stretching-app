import React from "react";
import "../card/card.scss";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
      exerciseName: 'Acostado Invertido',
      intervalCountDown: '00:00:00',
      totalCountDown: '00:34:00'
    }
  }

  render() {
    return <div className="card">
        <div className="card--exercise-name">{this.state.exerciseName}</div>
        <div className="card--interval-count-down">{this.state.intervalCountDown}</div>
        <div className="card--total-count-down">{this.state.totalCountDown}</div>
      </div>;
  }
}

export default Card;