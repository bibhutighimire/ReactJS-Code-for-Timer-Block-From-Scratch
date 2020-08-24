import React from "react";
import "../css/styles.css";
import TimerForm from './TimerForm';
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

class Timer extends React.Component
{  
// constructor(props)
// {
//   super(props);
//   this.state = {
//     title:"",
//     project:"",
//     isOpen: false,
//     newInputTimer:"",
//     listOfTimers:[]
//   }; 
// } 

  render(){
  return (
    <>
      <div className="timerContainer">
<li key={uuid()}>
        <h1>{this.props.titleProp}</h1>
        <p>{this.props.projectProp}</p>
        <time>01:12:36</time>
      <div className="fontAwesomeBinder">

      <i className="fa fa-trash-o"  onClick={(e) => this.toggleFavorite()} > <FontAwesomeIcon className="iconTrashAndEdit" icon={faTrash} /> </i>
      <i className="fa fa-edit-o"  onClick={(e) => this.toggleFavorite()} > <FontAwesomeIcon className="iconTrashAndEdit" icon={faEdit} /></i>       
        </div>
       
      <button className="timerBtn">START</button>
      </li>

    
      </div>
  
</>      
  );
  } 
}
export default Timer;
