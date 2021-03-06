import React from "react";
import "./App.css";
import AddNew from "./components/addNew/AddNew";
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";
import { getInitialData } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.newNote = this.newNote.bind(this);
    this.state = {
      noteData: [],
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
      searchData: [],
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
  };
  countingTitle = (event) => {
    if (event === "reset") {
      this.setState((prevState) => ({
        maxTitle: {
          ...prevState.maxTitle,
          text: "",
        },
      }));
      return;
    }
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
    if (event === "reset") {
      this.setState((prevState) => ({
        maxContent: {
          ...prevState.maxContent,
          text: "",
        },
      }));
      return;
    }
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
  addNote = (data) => {
    this.setState((prevState) => ({
      noteData: [
        ...prevState.noteData,
        {
          id: Date.now(),
          title: data.title,
          body: data.body,
          archived: false,
          createdAt: +new Date(),
        },
      ],
    }));
  };
  archivePosition = (id) => {
    // push back to state
    this.setState((prevState) => ({
      noteData: prevState.noteData.map((el) =>
        el.id === id ? { ...el, archived: !el.archived } : el
      ),
    }));
    this.setState({ activeNote: false });
  };
  deleteNote = (id) => {
    let newNotes = this.state.noteData.filter((note) => {
      return note.id !== id;
    });
    console.log(newNotes);
    this.setState({ noteData: newNotes });
    alert("Note berhasil dihapus");
    this.setState({ activeNote: false });
  };
  searchFunction = (e) => {
    let val = e.target.value.toLowerCase();
    let matches = this.state.noteData.filter((note) =>
      note.title.toLowerCase().includes(val)
    );
    this.setState({ searchData: matches });
  };
  componentDidMount() {
    this.setState({
      noteData: getInitialData(),
    });
  }

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
          addNote={this.addNote}
        />
        <div className="content">
          <LeftSide
            activeNote={this.changeActiveNote}
            archiveStatus={this.state.archiveDisplay}
            newNote={this.newNote}
            notes={
              this.state.searchData.length !== 0
                ? this.state.searchData
                : this.state.noteData
            }
            setStatus={this.changeArchiveStatus}
            theActiveNote={
              this.state.activeNote === false ? 0 : this.state.activeNote[0].id
            }
            searchFunction={this.searchFunction}
          />
          <RightSide
            archivePosition={this.archivePosition}
            active={this.state.activeNote}
            deleteNote={this.deleteNote}
          />
        </div>
      </div>
    );
  }
}

export default App;
