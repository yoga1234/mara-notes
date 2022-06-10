import React from "react";
import NoteCard from "./components/NoteCard";
import "./LeftSide.css";

const LeftSide = ({ newNote, notes, archiveStatus, setStatus }) => {
  let newNotes = notes.filter((note) => {
    return note.archived === archiveStatus;
  });
  const cutText = (input) => {
    if (input.length > 20) {
      return input.substring(0, 50) + "...";
    }
    return input;
  };

  return (
    <div className="left-container">
      <h1>MARANOTES</h1>
      <div className="left-menu-container">
        <div className="menu-container">
          <input className="search-input" type="text" placeholder="Search" />
          <div className="button-container">
            <button
              className={archiveStatus ? "notes-btn active" : "notes-btn"}
              onClick={setStatus}
            >
              Notes
            </button>
            <button
              className={archiveStatus ? "notes-btn " : "notes-btn active"}
              onClick={setStatus}
            >
              Archives
            </button>
          </div>
        </div>
        <div className="notes-container">
          {notes === undefined ? (
            <div className="notes-empty">Notes is empty</div>
          ) : (
            newNotes.map((note) => (
              <NoteCard key={note.id} noteData={note} cutText={cutText} />
            ))
          )}
        </div>
        <button onClick={newNote} className="button-add">
          New Note
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
