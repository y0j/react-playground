import React, {Component} from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

const StyleButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

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

      //style.backgroundColor = 'red';
      //style[':hover'] = {
      //  backgroundColor: 'salmon',
      //  color: 'black'
      //}
    }

    let classes = [];
    if (this.state.persons.length <=2){
      classes.push('red');
    }
    if (this.state.persons.length <=1) {
      classes.push('bold');
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
        <p className={classes.join(' ')}>This is OK</p>
        <StyleButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>   Toggle Persons
        </StyleButton>
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