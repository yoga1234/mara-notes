import React from "react";
import "./AddNew.css";

const AddNew = ({
  newNote,
  countingTitle,
  countingContent,
  textCount,
  maxTextCount,
  text,
  contentCount,
  contentText,
  contentMaxCount,
  addNote,
}) => {
  return (
    <div className="addnew-container display-none">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNote({ title: e.target[0].value, body: e.target[1].value });
          countingTitle("reset");
          countingContent("reset");
        }}
      >
        <div>
          <label htmlFor="title">TITLE</label>
          <input
            value={text}
            className="addnew-title"
            type="text"
            placeholder="Enter title here..."
            onChange={(e) => {
              countingTitle(e);
            }}
          />
          <span className="max-input-title">
            max title char: {maxTextCount - textCount}
          </span>
        </div>
        <div>
          <label htmlFor="content">CONTENT</label>
          <textarea
            className="addnew-content"
            name="content"
            value={contentText}
            onChange={countingContent}
          ></textarea>
          <span className="max-input-title">
            max content char: {contentMaxCount - contentCount}
          </span>
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
