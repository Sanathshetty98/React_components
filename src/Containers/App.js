import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id : '1', name:'Max', age: 26 },
      { id : '2', name:'Manu', age: 29 },
      { id : '3', name:'Raju', age: 23 }
    ],
    showPersons : false
  }
  static getDerivedStateFromProps( props,state ){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    <Aux style={{ minHeight: '100%' }}>
    <Cockpit
      title={this.props.appTitle}
      showpersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.toggleHandler}
    />
    {persons}
    </Aux>
    
    );
  }
}
export default withClass(App, classes.App);
