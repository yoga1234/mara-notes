import React from "react";
import "./AddNew.css";

const AddNew = ({ newNote }) => {
  return (
    <div className="addnew-container display-none">
      <form>
        <div>
          <label htmlFor="title">TITLE</label>
          <input
            className="addnew-title"
            type="text"
            placeholder="Enter title here..."
          />
          <span className="max-input-title">max title char: 40</span>
        </div>
        <div>
          <label htmlFor="content">CONTENT</label>
          <textarea className="addnew-content" name="content"></textarea>
          <span className="max-input-title">max content char: 620</span>
        </div>
        <button className="addnew-add-button">Add New</button>
        <button onClick={newNote} className="addnew-close-button">
          Close
        </button>
      </form>
    </div>
  );
};

export default AddNew;
