import React from "react";
import HandleInput from "./HandleInput";
import ListItem from "./ListItem";
import "./App.css";
import ListItemForNo from "./ListItemForNo"


function App() {
  return (
    <div className="row" style={{ margin: 10 }}>
      <div className="col-4">
        <HandleInput />
      </div>
      <div className="col-8">

        <ListItem />


        <ListItemForNo/>

        
        
      </div>
    </div>
  );
}

export default App;
