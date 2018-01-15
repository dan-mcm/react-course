import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Bill'
  }

  changeUser = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const shtyle = {
      backgroundColor: "pink",
      font: "inherit",
      border: "5px solid black",
      padding: "8px",
      display: 'inline-block'
    }

    return (
      <div className="App" style={shtyle}>
        <UserInput change={this.changeUser.bind(this)} value={this.state.username}/>
        <UserOutput username='Daniel'>Thats my Name!</UserOutput>
        <UserOutput username={this.state.username}>Thats some Randomers Name!</UserOutput>
      </div>
    );
  }
}

export default App;
