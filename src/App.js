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
    console.log('switchNameHandler');
  };

  render() {
    return (
        <div className='App'>
          <h1>Hi, this is React App</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} sex={this.state.persons[0].sex}/>
          <Person name={this.state.persons[1].name} sex={this.state.persons[0].sex}>This is a children</Person>
        </div>
    )
  }
}

export default App;
