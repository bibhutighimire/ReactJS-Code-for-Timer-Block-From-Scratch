import React from "react";
import "../css/styles.css";
import { v4 as uuidv4 } from "uuid";
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
    isOpen: false,
    newTimer:"",
    listOfTimers:[],
    uuidv4:""
    
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
      isOpen:false,
      project:e.target.value
    }
  )  
}
createNewTimer =(event) => {

    this.state.isOpen === true
      ? this.setState({ isOpen: false })
      : this.setState({ isOpen: true });

const newTimer =  {
  uniqueID:uuidv4(),
  titleValue:[...this.state.title],
  projectValue:[...this.state.project]
 
};

const CurrentTimerList= [...this.state.listOfTimers];
CurrentTimerList.push(newTimer);
console.log(CurrentTimerList);

this.setState({listOfTimers:CurrentTimerList,
title:"",
project:""
});
};

render() { 

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
    <div>
    if (this.state.isOpen) {
      <ul>
      {this.state.listOfTimers.map((indTimer)=> (
       <Timer titleProp={indTimer.titleValue} projectProp={indTimer.projectValue} key={indTimer.uniqueID} />
      )
      )
    }
   </ul>
}
    </div>
 
{/* <Timer project={this.state.project} title={this.state.title} /> */}
</>
  );
 }

}
export default TimerForm;
