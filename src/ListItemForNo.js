import React from "react";
import * as actionForToDoList from "./action/todolist/action";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import { Button, ListGroup, Col, Row, Container } from "react-bootstrap";
import ListItem from "./ListItem"



function ListItemForNo({
  theItemOfTheList,
  tempTestForShowInout,
  TheList,
  makeAsDoneFun,
  deleItemFun,
  handleInputVar2,
  tempTestForShowInout2,
  handleInputFun,
  handleInputFun2,
  handleEditFun,
  sendFinishUpdate
}) {
  
  return (
    <div>
      <Card bg="primary">
        <Card.Header>Finished</Card.Header>
        <ListGroup variant="flush">
          {TheList.map((item, index) =>
            item.finishstate === 1 ? (
              <Container>
                <Row className="justify-content-md-center">
                  <Col>
                    {/* <ListGroup.Item key={index} index={index}>
                      <li> {item.theItem}</li>{" "}
                    </ListGroup.Item> */}




                    {console.log("the ITEM = ", item)}
                    {console.log("This is the list", TheList)}
              

                    {item.handleUpdate === 0 ? (



                      <ListGroup.Item key={index} index={index}>
                        <li> {item.theItem}</li>{" "}
                      </ListGroup.Item>
                    ) : (
                      <input
                        type="text"
                        value={handleInputVar2}
                        onChange={event => handleInputFun2(event.target.value)}
                      />
                    )}
                  </Col>
                  <Col>
                    {/* <Button onClick={()=>makeAsDoneFun(item, index)}>Make as Done</Button> */}
                    <Button variant="info" onClick={() => makeAsDoneFun(index, item)}>
                      Make as Un-Done
                    </Button>
                    
                        
                    

                    {console.log("Let check IF THE INDEX IS EMPTY OR not", index)}
                    {item.handleUpdate === 0
                    ? <Button onClick={()=>handleEditFun(item, index)} variant="secondary">Update</Button>
                    : <Button onClick={()=>sendFinishUpdate(item, index, handleInputVar2)} variant="primary">Submit</Button>
                    }
                    {console.log("-----------------------------")}
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
                <div></div>
            )
          )}
        </ListGroup>
      </Card>
      <br />
      {/* <h1>Let see: {tempTestForShowInout}</h1>
      <h1>Let see 2: {tempTestForShowInout2}</h1> */}
    </div>
    
  );
}

const mapStateToProps = state => ({
  // theItemOfTheList: state.todolistReducer.Item.theItem,
  tempTestForShowInout: state.todolistReducer.handleInputVar,
  tempTestForShowInout2: state.todolistReducer.handleInputVar2,
  TheList: state.todolistReducer.theList,
  handleInputVar2: state.todolistReducer.handleInputVar2
});

const mapsStateToAction = dispatch => ({
  makeAsDoneFun: (item, index) =>
    dispatch(actionForToDoList.makeAsDoneFun(item, index)),

  deleItemFun: (item, index) =>
    dispatch(actionForToDoList.deleItemFun(item, index)),

  handleInputFun: tempInput =>
    dispatch(actionForToDoList.handleInputFun(tempInput)),

    handleInputFun2: tempInput =>
    dispatch(actionForToDoList.handleInputFun2(tempInput)), 

  handleEditFun: (item, index) => dispatch(actionForToDoList.handleEditFun(item, index)),

  addItemFun: inputTemp => dispatch(actionForToDoList.addItemToTheList(inputTemp)),

  sendFinishUpdate: (item, index, inputTemp) => dispatch(actionForToDoList.sendFinishUpdate(item, index, inputTemp))
});



export default connect(
  mapStateToProps,
  mapsStateToAction
)(ListItemForNo);
