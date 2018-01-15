import React from 'react';

//note: class-based components use this.props
//note: function based components cannot use state

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p> {/* refers to elements between component tags */}
    </div>
  )
}

export default person
