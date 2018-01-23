import React from "react";
import Radium from "radium";
import "./Person.css"; //webpack allows the import of css files

//note: class-based components use this.props
//note: function based components cannot use state

const person = props => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p> {/* refers to elements between component tags */}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
