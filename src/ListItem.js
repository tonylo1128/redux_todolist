import React from "react";
import * as actionForToDoList from "./action/todolist/action";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import {
  Button,
  Accordion,
  ListGroup,
  Col,
  Row,
  Container
} from "react-bootstrap";

function ListItem({ theItemOfTheList, tempTestForShowInout, TheList,makeAsDoneFun }) {
  return (
    <div>
      <Card bg="danger">
        <Card.Header>Havent Finish</Card.Header>
        <ListGroup variant="flush">
          {TheList.map((item, index) =>
            item.finishstate == 0 ? (
              <Container>
                <Row className="justify-content-md-center">
                  <Col>
                    <ListGroup.Item key={index} index={index}>
                      <li> {item.theItem}</li>{" "}
                    </ListGroup.Item>
                  </Col>
                  <Col>
                    <Button onClick={(index, item)=>makeAsDoneFun(index, item)}>Make as Done</Button>
                  
                    <Button variant="secondary">Update</Button>
                  
                    <Button variant="warning">Delete</Button>
                  </Col>
                </Row>
              </Container>
            ) : (
              <h1>Has done</h1>
            )
          )}
        </ListGroup>
      </Card>
      <br />
      <h1>Let see: {tempTestForShowInout}</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  // theItemOfTheList: state.todolistReducer.Item.theItem,
  tempTestForShowInout: state.todolistReducer.handleInputVar,
  TheList: state.todolistReducer.theList
});

const mapsStateToAction = dispatch => ({
  makeAsDoneFun : (index, item) => dispatch(actionForToDoList.makeAsDoneFun(index, item))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(ListItem);
