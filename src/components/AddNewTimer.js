import React from "react";
import "../css/styles.css";
import TimerForm from "./TimerForm";
import { v4 as uuid } from "uuid";
import index from "../index";

class AddNewTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  // toggle isOpen between false and true on click
  createNewTimer = (props) => {
    this.state.isOpen === true
      ? this.setState({ isOpen: false })
      : this.setState({ isOpen: true });
  };

  // render the Timer form only if isOpen is true / else do nothing
  renderTimerForm() {
    if (this.state.isOpen) {
      return <TimerForm />;
    }
  }

  render() {
    return (
      <>
        <button className="toggleAbleTimerBtn" onClick={this.createNewTimer}>
          Add new Timer
        </button>
        {this.renderTimerForm()}
      </>
    );
  }
}
export default AddNewTimer;
