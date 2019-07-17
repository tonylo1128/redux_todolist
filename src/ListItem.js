import React from "react";
import * as actionForToDoList from "./action/todolist/action";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import { Button, ListGroup, Col, Row, Container } from "react-bootstrap";

function ListItem({
  theItemOfTheList,
  tempTestForShowInout,
  TheList,
  makeAsDoneFun,
  deleItemFun,
  handleInputVar,
  handleInputFun,
  handleEditFun
}) {
  
  return (
    <div>
      <Card bg="danger">
        <Card.Header>Havent Finish</Card.Header>
        <ListGroup variant="flush">
          {TheList.map((item, index) =>
            item.finishstate === 0 ? (
              <Container>
                <Row className="justify-content-md-center">
                  <Col>
                    {/* <ListGroup.Item key={index} index={index}>
                      <li> {item.theItem}</li>{" "}
                    </ListGroup.Item> */}




                    {console.log("the finishState update value = ", item.finishstate)}
                    {console.log("the handle update value = ", item.handleUpdate)}

                    {item.handleUpdate === 0 ? (



                      <ListGroup.Item key={index} index={index}>
                        <li> {item.theItem}</li>{" "}
                      </ListGroup.Item>
                    ) : (
                      <input
                        type="text"
                        value={handleInputVar}
                        onChange={event => handleInputFun(event.target.value)}
                      />
                    )}
                  </Col>
                  <Col>
                    {/* <Button onClick={()=>makeAsDoneFun(item, index)}>Make as Done</Button> */}
                    <Button onClick={() => makeAsDoneFun(index, item)}>
                      Make as Done
                    </Button>
                    {console.log("This is the index : ", index)}

                    {console.log(
                      "This is the item's state: ",
                      item.finishstate
                    )}

                    <Button onClick={()=>handleEditFun(item, index)} variant="secondary">Update</Button>

                    <Button
                      onClick={() => deleItemFun(item, index)}
                      variant="warning"
                    >
                      Delete
                    </Button>
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
  TheList: state.todolistReducer.theList,
  handleInputVar: state.todolistReducer.handleInputVar
});

const mapsStateToAction = dispatch => ({
  makeAsDoneFun: (item, index) =>
    dispatch(actionForToDoList.makeAsDoneFun(item, index)),
  deleItemFun: (item, index) =>
    dispatch(actionForToDoList.deleItemFun(item, index)),
  handleInputFun: tempInput =>
    dispatch(actionForToDoList.handleInputFun(tempInput)),
  handleEditFun: (item, index) => dispatch(actionForToDoList.handleEditFun(item, index))
});

export default connect(
  mapStateToProps,
  mapsStateToAction
)(ListItem);
