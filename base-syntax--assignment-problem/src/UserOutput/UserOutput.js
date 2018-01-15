import React from 'react';

import './UserOutput.css';

const UserOutput = (props) => (
  <div className='output'>
    <p>{props.username}</p>
    <p>{props.children}</p>
  </div>
)

export default UserOutput
