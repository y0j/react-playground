import React, {Component, createElement} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 38},
      { name: 'Tom', age: 39},
      { name: 'Mark', age: 36}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T Do THIS: this.state.persons[0].name = 'Denis';
    // Component object has a special setState method
    this.setState( {
      persons: [
        { name: newName, age: 28},
        { name: newName, age: 29},
        { name: 'Mark', age: 37}
      ]
    } ) 
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Mark', age: 37}
      ]
    } ) 
  }

  render () {
    const style = {
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi am a React app1</h1>
        <p> This is oK </p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Anatolik!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} >LALALA</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maaax')}changed={this.nameChangedHandler}>My Hobbies: Racing111</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;






/*
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 38 },
      { name: 'Tom', age: 39 },
      { name: 'Mark', age: 36 }
    ]
  });

  const [otherState, setOtherState] = useState('my other state');

  console.log(personsState, otherState);
  //console.log(setPersonsState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Denis', age: 18},
        { name: 'Tom', age: 19},
        { name: 'Mark', age: 17}
      ],
      //otherState: personsState.otherState
      otherState: 'new state'
    }); 
  }  

  return (
    <div className="App">
      <h1>Hi am a React app1</h1>
      <p> This is oK </p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}> LALALA
      </Person>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>My Hobbies: Racing!
        </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
    </div>
  )
}

export default App;
*/