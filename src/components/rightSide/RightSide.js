import React from "react";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right-container">
      <p className="note-source">
        From <span>Archive</span>
      </p>
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
      {/* <div className="note-container empty">
        Please select a note to display.
      </div> */}
    </div>
  );
};

export default RightSide;
