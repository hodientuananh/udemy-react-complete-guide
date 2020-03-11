import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'First', sex: 'Female'},
      { id: '2', name: 'Second', sex: 'Male'}
    ],
    showPersons: true
  };

  switchNameHandler = () => {
    // console.log('switchNameHandler');
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
    }

    return (
        <div className='App'>
          <h1>Hi, this is React App</h1>
          <button
              className='Button'
              onClick={this.switchNameHandler}>Switch Name</button>
          <button
              className='Button'
              onClick={this.toggleNameHandler}>Toggle Name</button>
          {persons}
        </div>
    )
  }
}

export default App;
