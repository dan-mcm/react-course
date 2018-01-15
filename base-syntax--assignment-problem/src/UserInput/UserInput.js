import React from 'react';
import './UserInput.css';

const UserInput = (props) => (
  <input className='input' type="text" onChange={props.change} value={props.value}/>
)

export default UserInput
