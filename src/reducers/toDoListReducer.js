import * as TypeofToDoList from '../action/todolist/type'



const initState={
    theList:[],
    handleInputVar:"",
    
}


export default function(state = initState, {type, payload}){
    const Item={
        theItem:"",
        finishstate: 0
    };


    switch(type){
        case TypeofToDoList.HANDLE_INPUT:
            return{
                ...state,
                handleInputVar: payload
            };
        
        case TypeofToDoList.ADD_ITEM:
            return{
                ...state,
                theList: [...state.theList, { ...Item, theItem: payload } ]
            };
        
        default:
            return state;
    }
}