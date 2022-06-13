import React from "react";

const NoteCard = ({ noteData, cutText, clicking, theActiveNote }) => {
  return (
    <div
      onClick={() => {
        clicking(noteData.id);
      }}
      key={noteData.id}
      className={theActiveNote === noteData.id ? "note active" : "note"}
    >
      <h3 className="note-title">{noteData.title}</h3>
      <p className="note-content">{cutText(noteData.body)}</p>
    </div>
  );
};

export default NoteCard;
