import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //       <h2>Hi I'm a React App!</h2>
    //   </div>
    // );

    return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'DOES THIS WORK NOW?' ))
  }
}

export default App;
