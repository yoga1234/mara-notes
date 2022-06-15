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
        text: "",
        count: 0,
        max: 40,
      },
      maxContent: {
        text: "",
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
  countingTitle = (event) => {
    console.log(event);
    if (event.target.value.length > this.state.maxTitle.max) {
      return;
    }
    this.setState((prevState) => ({
      maxTitle: {
        ...prevState.maxTitle,
        text: event.target.value,
        count: event.target.value.length,
      },
    }));
  };
  countingContent = (event) => {
    if (event.target.value.length > this.state.maxContent.max) {
      return;
    }
    this.setState((prevState) => ({
      maxContent: {
        ...prevState.maxContent,
        text: event.target.value,
        count: event.target.value.length,
      },
    }));
  };

  render() {
    return (
      <div className="App">
        <AddNew
          countingTitle={this.countingTitle}
          countingContent={this.countingContent}
          onClick={this.changeActiveNote}
          newNote={this.newNote}
          textCount={this.state.maxTitle.count}
          text={this.state.maxTitle.text}
          maxTextCount={this.state.maxTitle.max}
          contentCount={this.state.maxContent.count}
          contentText={this.state.maxContent.text}
          contentMaxCount={this.state.maxContent.max}
        />
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
