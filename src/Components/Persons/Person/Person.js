import React,{ Component } from 'react';
import './Person.css'
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render()
  {
  console.log('[Person.js] rendering...');
  return (
    <Aux classes='Person'>
    <p onClick = {this.props.click}> I'm  {this.props.name} and I'm {this.props.age} years old!</p>
    <p>{this.props.children}</p>
    <input type="text" onChange={this.props.changed} value={this.props.name} />
    </Aux>
    )
  }
}

export default Person;