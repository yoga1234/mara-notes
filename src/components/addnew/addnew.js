import React from "react";
import "./AddNew.css";

const AddNew = () => {
  return (
    <div className="addnew-container">
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Enter title here..." />
        </div>
        <div></div>
        <label htmlFor="content">Content</label>
        <input type="text" placeholder="Enter content here..." />
      </form>
    </div>
  );
};

export default AddNew;
