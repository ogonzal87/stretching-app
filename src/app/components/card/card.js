import React from "react";
import "../card/card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseName: 'Acostado Invertido',
    }
  }

  render() {
    return <div className="card">
        <div className="card--exercise-name">{this.state.exerciseName}</div>
        <div className="card--interval-count-down">
          {this.props.intervalCountDown}
        </div>
        <div className="card--total-count-down">
          {this.props.totalTime}
        </div>
      </div>;
  }
}

export default Card;