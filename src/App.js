import React from "react";
import "./App.css";
import AddNew from "./components/addNew/AddNew";
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.newNote = this.newNote.bind(this);
  }
  newNote = (e) => {
    e.preventDefault();
    const addNewForm = document.querySelector(".addnew-container");
    addNewForm.classList.toggle("display-none");
  };

  render() {
    return (
      <div className="App">
        <AddNew newNote={this.newNote} />
        <div className="content">
          <LeftSide newNote={this.newNote} />
          <RightSide />
        </div>
      </div>
    );
  }
}

export default App;
