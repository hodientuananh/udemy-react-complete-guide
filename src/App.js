import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'First', sex: 'Female'},
      { name: 'Second', sex: 'Male'}
    ]
  };

  switchNameHandler = () => {
    // console.log('switchNameHandler');
    this.setState({
      persons: [
            { name: 'Updated First', sex: 'Female'},
            { name: 'Updated Second', sex: 'Male'}
          ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Updated First!!!', sex: 'Female'},
        { name: event.target.value, sex: 'Male'}
      ]
    })
  };

  render() {
    return (
        <div className='App'>
          <h1>Hi, this is React App</h1>
          <button
              className='Button'
              onClick={this.switchNameHandler}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              sex={this.state.persons[0].sex}/>
          <Person
              name={this.state.persons[1].name}
              sex={this.state.persons[0].sex}
              changed={this.nameChangeHandler}>This is a children
          </Person>
        </div>
    )
  }
}

export default App;
