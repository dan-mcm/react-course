import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import "./App.css";

class App extends Component {
  state = {
    word: [],
    counter: 0
  };

  changeListener = event => {
    let value = event.target.value.length;
    let word = event.target.value.split("");
    console.log(word);
    this.setState({
      counter: value,
      word: word
    });
  };

  removeChar = (index) =>{
    const text = this.state.word;
    text.splice(index, 1);
    const updatedText = text.join('').split("");
    this.setState({word: updatedText});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeListener} value={this.state.word.join('')}/>
        <p>Current State Counter: {this.state.counter}</p>
        <ValidationComponent textLength={this.state.counter} />
        {(this.state.word).map((character, index) => {
          return <CharComponent clicked={() => this.removeChar(index)} key={character + index} character={character}  />
        })}

        <ol>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
