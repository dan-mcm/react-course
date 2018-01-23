import React, { Component } from "react";
import classes from "./App.css"; //due to changes in cssloader in webpack.config.dev and webpack.config.dev we can now import as classes
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdf", name: "Max", age: 28 },
      { id: "sdfg", name: "Manu", age: 29 },
      { id: "dfgh", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); //built in JS method

    //const person = this.state.persons[personIndex]; //careful of mutation - reference
    //const person = Object.assign({}, this.state.persons[personIndex]) //this works
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons; //bad practice due to being a pointer to setState
    //const persons = this.state.persons.slice(); //returns a copy of the original this would be ok
    const persons = [...this.state.persons]; //spreads state into a new array - also would be ok
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h2>Hi I'm a React App!</h2>
          <p className={assignedClasses.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonHandler}>
            Switch Name
          </button>
          {persons}
        </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'DOES THIS WORK NOW?' ))
  }
}

export default App;
