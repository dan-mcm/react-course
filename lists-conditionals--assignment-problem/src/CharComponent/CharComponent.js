import React, { Component } from 'react';

class CharComponent extends Component {
  render() {
    const shtyle = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black' };

    return (
      <div style={shtyle}>
        <p onClick={this.props.clicked}>
          {this.props.character}
        </p>
      </div>
    );
  }
}

export default CharComponent;
