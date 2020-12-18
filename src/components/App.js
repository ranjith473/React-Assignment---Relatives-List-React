import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relatives = ["dad", "mom", "brother", "sister"];
    return (
      <div id="main">
        <ol key="relativeList">
          {relatives.map((relative, idx) => (
            <li key={"relativeListItem" + (idx + 1)}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
