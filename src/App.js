import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: 'da5s11', name: 'Max', age: 18},
      { id: 'g1fd31', name: 'Tom', age: 39},
      { id: 'he63sq', name: 'Mark', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false,
    textInput: '',
    textInputLength: 0
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // copy an array instead of use pointer and change the same one
    const persons = [...this.state.persons]; // the same as slice() - copying the object
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  getLengthHandler = (event) => {
    const textInput = event.target.value;
    const textInputLength = textInput.length;
    this.setState({
      textInput: textInput,
      textInputLength: textInputLength
    });
  }

  deleteCharHandler = (index) => {
    const text = this.state.textInput.split('');
    text.splice(index, 1)
    const updatedText = text.join('');
    this.setState({textInput: updatedText})
  }

  render () {
    const style = {
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    const charList = this.state.textInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}/>;
    });


    return (
      <div className="App">
        <h1>Hi am a React app1</h1>
        <p> This is oK </p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <br/>
        <br/>
        <input type="text" onChange={(event) => this.getLengthHandler(event)} value={this.state.textInput}/>
        <p>Length of the entered text: {this.state.textInputLength}</p>
        <Validation textInputLength={this.state.textInputLength} />
        {charList}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


//        <input type="text" onChange={(event) => this.nameChangedHandler(event, )}/>




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