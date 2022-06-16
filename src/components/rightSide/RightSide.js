import React from "react";
import "./RightSide.css";

const RightSide = ({ active }) => {
  let data = active === undefined ? "-" : active[0];

  const checkSource = () => {
    let status;
    // handling if data undefined
    if (data === undefined) {
      return "-";
    }
    if (data.archived === true) {
      status = "Archived";
    } else if (data.archived === false) {
      status = "Notes";
    } else if (Object.keys(data).length === 0) {
      status = "-";
    }
    return status;
  };
  const checkTitle = () => {
    if (data === undefined) {
      return "Loading...";
    } else {
      return data.title;
    }
  };
  const checkBody = () => {
    if (data === undefined) {
      return "Loading...";
    } else {
      return data.body;
    }
  };
  return (
    <div className="right-container">
      <p className="note-source">
        From <span>{checkSource()}</span>
      </p>
      {Object.keys(active).length === 0 ? (
        <div className="note-container empty">
          Please select a note to display.
        </div>
      ) : (
        <div className="note-container">
          <h3 className="right-note-title">{checkTitle()}</h3>
          <p className="right-note-content">{checkBody()}</p>
        </div>
      )}
      <div className="right-button-container">
        <button>Add to Archive</button>
        <button>Delete Note</button>
      </div>
    </div>
  );
};

export default RightSide;
