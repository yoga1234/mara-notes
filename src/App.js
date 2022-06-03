import React from "react";
import "./App.css";
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LeftSide />
        <RightSide />
      </div>
    );
  }
}

export default App;
