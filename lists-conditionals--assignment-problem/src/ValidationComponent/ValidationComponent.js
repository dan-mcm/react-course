import React, { Component } from 'react';

class ValidationComponent extends Component {
  render() {
    return (
      <div>
        <p>
          {(this.props.textLength < 5) ? 'Text too short!' : 'Text long enough!'}
        </p>
      </div>
    );
  }
}

export default ValidationComponent;
