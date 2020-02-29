import React from "react";
import "./Person.css";

const person = (props) => {
  //1 seul arg props
  //nom function minscule
  return (
    <div className="Person">
      <p onClick={props.moved}>
        I'm {props.name} and I'm {props.age} years old
        </p>
      <button onClick={props.deleted}>x</button>
      <br />
      <input onChange={props.changed} />
    </div>
  );
};
export default person;

//functional based component : khfif w affichage seulement
//class based component :fih state w logique w functions
