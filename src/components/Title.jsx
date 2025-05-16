import React from "react";
import "./title.css";
const Title = (props) => {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <p>{props.des}</p>
    </div>
  );
};

export default Title;
