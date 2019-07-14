import React from "react";
import HandleInput from "./HandleInput";
import ListItem from "./ListItem";
import "./App.css";


function App() {
  return (
    <div className="row" style={{ margin: 20 }}>
      <div className="col-4">
        <HandleInput />
      </div>
      <div className="col-8">
        <ListItem />
      </div>
    </div>
  );
}

export default App;
