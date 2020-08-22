import React from "react";
import "../css/styles.css";
import { v4 as uuid } from "uuid";

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
createNewTimer = (e) => {
let project=this.state.project;
let title=this.state.title;
}
render() {  
  return (

    
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
  );
}}
export default TimerForm;
