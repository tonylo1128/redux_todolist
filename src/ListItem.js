import React from "react";
import * as actionForToDoList from "./action/todolist/action";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import {Button, Accordion, ListGroup} from "react-bootstrap";


function ListItem({ theItemOfTheList, tempTestForShowInout, theList }) {
  return (
    <div>
      <Card bg="danger">
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
        {theList.map( (item, index) => (
                
                 
                item.map( (item, index)  => (
                    <ListGroup.Item item={item} key={index} index={index}> </ListGroup.Item>
                 ))
                 
                 
            )  
            )}
          
        </ListGroup>
      </Card>
      <br/>
      <h1>Let see: {tempTestForShowInout}</h1>

    </div>
  );
}

const mapStateToProps = state => ({
  // theItemOfTheList: state.todolistReducer.Item.theItem,
  tempTestForShowInout: state.todolistReducer.handleInputVar,
  TheList: state.todolistReducer.theList
});

const mapsStateToAction = dispatch => {};

export default connect(
  mapStateToProps,
  mapsStateToAction
)(ListItem);
