import React from "react";
import "./LeftSide.css";

const LeftSide = ({ newNote }) => {
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
            <button className="notes-btn">Notes</button>
            <button className="archive-btn">Archives</button>
          </div>
        </div>
        <div className="notes-container">
          <div className="note">
            <h3 className="note-title">This is title</h3>
            <p className="note-content">
              {cutText(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam nostrum autem architecto, laboriosam ipsam quo rerum deleniti porro similique beatae dolorum, at nesciunt nisi, quidem aliquid aliquam accusantium sapiente?"
              )}
            </p>
          </div>

          {/* <div className="notes-empty">Notes is empty</div> */}
        </div>
        <button onClick={newNote} className="button-add">
          New Note
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
