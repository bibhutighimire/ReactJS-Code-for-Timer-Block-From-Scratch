import React from "react";
import "../css/styles.css";
import TimerForm from './TimerForm';
import { v4 as uuid } from "uuid";
import index from '../index';

class AddNewTimer extends React.Component
{
  createNewTimer = (props) => {
  
props.isOpen=true;

}
  render(){
   
      return (
        <>
    <button className="toggleAbleTimerBtn" onClick={this.createNewTimer}>Add new Timer</button>
    <TimerForm />
    </>
    );
  
}
}
export default AddNewTimer;
