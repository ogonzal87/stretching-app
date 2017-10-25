import React from "react";
import "./button.scss"



const Button = (props) => {
  return <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button className="button" onClick={ props.handleClick }>
        {props.label}
      </button>
    </div>;
}

export default Button;