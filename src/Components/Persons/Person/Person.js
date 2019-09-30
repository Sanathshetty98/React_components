import React,{ Component } from 'react';
import './Person.css'
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount(){
    this.inputElementRef.current.focus();
  }
  render()
  {
  console.log('[Person.js] rendering...');
  return (
    <Aux classes='Person'>
    <p onClick = {this.props.click}> I'm  {this.props.name} and I'm {this.props.age} years old!</p>
    <p>{this.props.children}</p>
    <input 
    //ref={ (inputEl) => { this.inputElement = inputEl}}
    ref={this.inputElementRef}
    type="text" onChange={this.props.changed} value={this.props.name} />
    </Aux>
    )
  }
}

export default Person;