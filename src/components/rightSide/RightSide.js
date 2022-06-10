import React from "react";
import "./RightSide.css";

const RightSide = ({ active }) => {
  const checkSource = () => {
    let status;
    if (active.archived === true) {
      status = "Archived";
    } else if (active.archived === false) {
      status = "Notes";
    } else if (Object.keys(active).length === 0) {
      status = "-";
    }
    return status;
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
          <h3 className="right-note-title">Title goes here</h3>
          <p className="right-note-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            saepe repudiandae dolores cupiditate incidunt eaque omnis iste nulla
            odit assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Fugiat laudantium quia maiores aperiam vitae ad adipisci nemo
            cupiditate laboriosam omnis!
          </p>
        </div>
      )}
      {/* <div className="note-container">
        <h3 className="right-note-title">Title goes here</h3>
        <p className="right-note-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          saepe repudiandae dolores cupiditate incidunt eaque omnis iste nulla
          odit assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Fugiat laudantium quia maiores aperiam vitae ad adipisci nemo
          cupiditate laboriosam omnis!
        </p>
      </div> */}
      {/* <div className="note-container empty">
        Please select a note to display.
      </div> */}
    </div>
  );
};

export default RightSide;
