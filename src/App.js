import React from "react";
import "./App.css";
import AddNew from "./components/addNew/AddNew";
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.newNote = this.newNote.bind(this);
    this.state = {
      noteData: [
        {
          id: 12345,
          title: "Testing",
          body: "Testing 1234 Testing 1234 Testing 1234Testing 1234Testing 1234 Testing 1234",
          archived: false,
          createdAt: "2022-04-14T04:27:34.572Z",
        },
        {
          id: 123451,
          title: "Archived 1",
          body: "Testing 1234 Testing 1234 Testing 1234Testing 1234Testing 1234 Testing 1234",
          archived: true,
          createdAt: "2022-04-14T04:27:34.572Z",
        },
      ],
      activeNote: false,
      archiveDisplay: true,
      maxTitle: {
        count: 0,
        max: 40,
      },
      maxContent: {
        count: 0,
        max: 620,
      },
    };
  }
  newNote = (e) => {
    e.preventDefault();
    const addNewForm = document.querySelector(".addnew-container");
    addNewForm.classList.toggle("display-none");
  };
  changeArchiveStatus = () => {
    this.setState({
      archiveDisplay: !this.state.archiveDisplay,
    });
  };
  changeActiveNote = (id) => {
    // map to take the active note
    let selectedNote = this.state.noteData.filter((note) => {
      return note.id === id;
    });

    this.setState({ activeNote: selectedNote });
    setTimeout(() => console.log(this.state.activeNote[0].id), 2000);
  };

  render() {
    return (
      <div className="App">
        <AddNew onClick={this.changeActiveNote} newNote={this.newNote} />
        <div className="content">
          <LeftSide
            activeNote={this.changeActiveNote}
            archiveStatus={this.state.archiveDisplay}
            newNote={this.newNote}
            notes={this.state.noteData}
            setStatus={this.changeArchiveStatus}
            theActiveNote={
              this.state.activeNote === false ? 0 : this.state.activeNote[0].id
            }
          />
          <RightSide active={this.state.activeNote} />
        </div>
      </div>
    );
  }
}

export default App;
