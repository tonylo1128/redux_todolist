import { combineReducers } from "redux"
import reducers from "./toDoListReducer"

export default combineReducers({
    todolistReducer: reducers
})