import React from "react";
import "../css/styles.css";
import TimerForm from './TimerForm';
import { v4 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const Timer = (props) => {
  
  function toggleFavorite(event) {
event.preventDefault();
  }
  return (
    <>
      <div className="timerContainer">
        <h1>{props.title}</h1>
        <p>{props.project}</p>
        <time>01:12:36</time>
      <div className="fontAwesomeBinder">

      <i className="fa fa-trash-o"  onClick={(e) => this.toggleFavorite()} > <FontAwesomeIcon className="iconTrashAndEdit" icon={faTrash} /> </i>
      <i className="fa fa-edit-o"  onClick={(e) => this.toggleFavorite()} > <FontAwesomeIcon className="iconTrashAndEdit" icon={faEdit} /></i>  
      
        </div>
       
      <button className="timerBtn">START</button>
      </div>
  
</>      
  );
}
export default Timer;
