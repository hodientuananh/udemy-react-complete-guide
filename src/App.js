import React, {Component} from 'react';
import { StyleRoot } from "radium";
import Classes from './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'First', sex: 'Female'},
      { id: '2', name: 'Second', sex: 'Male'}
    ],
    showPersons: false
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { id: '1', name: 'Updated First', sex: 'Female'},
        { id: '2', name: 'Updated Second', sex: 'Male'}
      ]
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };

  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;
    let paragraphStyle = [];
    let buttonClass = '';

    if (this.state.showPersons) {
      persons = (
          <div>
            {this.state.persons.map((person) => {
              return <Person
                  key={person.id}
                  name={person.name}
                  sex={person.sex}
                  click={this.deletePersonHandler.bind(person.id)}
                  changed={(event) => this.nameChangeHandler(event, person.id)}/>
            })}
          </div>
      );

      buttonClass = Classes.Red;
    }

    if (this.state.persons.length <= 1) {
      paragraphStyle.push(Classes.red);
    }
    if (this.state.persons.length <= 0) {
      paragraphStyle.push(Classes.bold);
    }

    return (
        <StyleRoot>
          <div className={Classes.App}>
            <p className={paragraphStyle.join(' ')}>Hi, this is React App</p>
            <button
                onClick={this.switchNameHandler}>Switch Name</button>
            <button
                onClick={this.toggleNameHandler}>Toggle Name</button>
            {persons}
          </div>
        </StyleRoot>
    )
  }
}

export default App;
