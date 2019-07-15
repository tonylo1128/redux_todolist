import React from 'react'
import * as actionForToDoList from './action/todolist/action'
import { connect } from 'react-redux';
import {Button} from "react-bootstrap"

function HandleInput( { handleInputVar, handleInputFun, addItemFun, theList} ){
    {console.log("This is the input val: ",handleInputVar)}
    {console.log("this is the col: ",theList.Item)}
    {console.log("this is the for the list: ",theList)}
    return(
        <div>
            <h1>Input here, DumbAss</h1>
            <div className="row" >

                <div className="col-5" >
                <input type="text" value={handleInputVar} onChange={ event => handleInputFun(event.target.value)}></input>
                </div>

                <div className="col-5" style={{ marginLeft :15}} >
                <Button onClick={()=>addItemFun(handleInputVar)} variant="primary">Submit</Button>
                </div>
                
            </div>
            
        </div>
    )
}

const mapStatetoProps = (state) =>({
    handleInputVar : state.todolistReducer.handleInputVar,
    theList: state.todolistReducer.theList
});

const mapStatetoAction = (dispatch) =>({
    handleInputFun: tempInput => dispatch(actionForToDoList.handleInputFun(tempInput)),
    addItemFun: inputTemp => dispatch(actionForToDoList.addItemToTheList(inputTemp))
});

export default connect(mapStatetoProps, mapStatetoAction)(HandleInput)