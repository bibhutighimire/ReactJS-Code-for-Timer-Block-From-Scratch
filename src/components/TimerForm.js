import React from "react";
import "../css/styles.css";
import { v4 as uuid } from "uuid";
import Timer from './Timer';
import AddNewTimer from './AddNewTimer';
class TimerForm extends React.Component
{
  
constructor(props)
{
  super(props);
  this.state = {
    title:"",
    project:"",
    
  };
 
} 
handleChangeTitle = (e) =>
{
  this.setState(
    {
      title:e.target.value
    }
  ) 
}
handleChangeProject = (e) =>
{
  this.setState(
    {
      project:e.target.value
    }
  )  
}

render() { 
  
// const isOpen=false;
//   if(isOpen) {
  return (

    <>
      <div className="timerContainer">
        <h2>Title</h2>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle}/>
        <h2>Project</h2>
       <input type="text" name="project" value={this.state.project} onChange={this.handleChangeProject}/>
        <div className="updateAndDeleteBtnBinder">
      <button className="updateAndDeleteBtn" onClick={this.createNewTimer}>Create</button>
      <button className="updateAndDeleteBtn">Cancel</button>
      </div>
      </div>   
<Timer project={this.state.project} title={this.state.title} />
</>
  );
// }
// else {
//   return (
//     <button className="toggleAbleTimerBtn" onClick={this.createNewTimer}>Add new Timer</button>
//   );
// }
}}
export default TimerForm;
