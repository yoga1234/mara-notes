import React from "react";
import "./App.css";
import AddNew from "./components/addNew/AddNew";
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddNew />
        <div className="content">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    );
  }
}

export default App;
