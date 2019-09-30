import React,{ useEffect } from 'react';
import Classes from './Cockpit.module.css';

const Cockpit = (props) =>{

    useEffect( () =>
      {
        console.log(' [Cockpit.js] UseEffect()');
        setTimeout( () => {
          alert('data saved to cloud');
        },1000);
      },[]
    );
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
      str=' All the Elements are Deleted!!!';
    }
    return(
    <div className = {Classes.Cockpit} >
    <h1> {props.title}</h1>
    <p className={classes.join(' ')}> {str}</p>
    <button 
    className = {btnClass}
    onClick={props.clicked}> Toggle persons</button>
    </div>
    );
};


export default Cockpit;
