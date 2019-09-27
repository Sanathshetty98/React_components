import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons: [
      { id : '1', name:'Max', age: 26 },
      { id : '2', name:'Manu', age: 29 },
      { id : '3', name:'Raju', age: 23 }
    ],
    showPersons : false
  }
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(
      p => {return p.id === id ;}
    )
    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    }
    )
  }
  deleteHandler =(perIndex) =>{
    const persons = [...this.state.persons] ;
    persons.splice(perIndex,1)
    this.setState({persons : persons})
  }
  toggleHandler = () => {
     const doesshow = this.state.showPersons;
     this.setState({showPersons : !doesshow})
  }
  render() {
    let persons = null
    if(this.state.showPersons){
    persons= ( <Persons 
      persons={this.state.persons}
      clicked={this.deleteHandler}
      changed={this.nameChangedHandler}/>)
    }
    return(
    <div className={classes.App}>
    <Cockpit
      showpersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.toggleHandler}
    />
    {persons}
    </div>
    
    );
  }
}
export default App;
