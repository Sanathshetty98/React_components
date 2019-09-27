import React from 'react';
import Classes from './Cockpit.module.css';

const cockpit = (props) =>{
    let str ='This is working!!!';
    let btnClass='';
    if(props.showpersons){
    btnClass=Classes.Red;
    }
    const classes = [];
    if(props.persons.length <=2)
    {
      classes.push(Classes.red);
    }
    if(props.persons.length <=1)
    {
      classes.push(Classes.bold);
    }
    if(props.persons.length<1){
      str=' All the ELements are Deleted!!!';
    }
    return(
    <div className = {Classes.Cockpit} >
    <h1> Hi, I'm a React App</h1>
    <p className={classes.join(' ')}> {str}</p>
    <button 
    className = {btnClass}
    onClick={props.clicked}> Toggle persons</button>
    </div>
    );
};


export default cockpit;
