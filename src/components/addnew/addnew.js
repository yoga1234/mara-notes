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
        </div>
        <div>
          <label htmlFor="content">CONTENT</label>
          <textarea className="addnew-content" name="content"></textarea>
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
