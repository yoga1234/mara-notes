import React from "react";

const NoteCard = ({ noteData, cutText }) => {
  return (
    <div key={noteData.id} className="note">
      <h3 className="note-title">{noteData.title}</h3>
      <p className="note-content">{cutText(noteData.body)}</p>
    </div>
  );
};

export default NoteCard;
