import * as TypeofToDoList from '../action/todolist/type'



const initState={
    theList:[],
    handleInputVar:"",
    
    
}


export default function(state = initState, {type, payload}){
    const Item={
        theItem:"",
        finishstate: 0,
        handleUpdate: 0
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
        case TypeofToDoList.MAKEASDONE:
            return{
                ...state,
                theList: state.theList.map((currentElement, index) => ((index === payload.index ) ? {...payload.item, finishstate:1}: currentElement ))
        }

        case TypeofToDoList.DELEITEM:
            return{
                ...state,
                theList: state.theList.filter((item,index)=> payload.index !== index)
            }

        case TypeofToDoList.HANDLINGEDIT:
            return{
                ...state,
                handleUpdate: (payload.item.handleUpdate === 0)
                ? {...payload.item, handleUpdate:1} :{...payload.item, handleUpdate:0}                
            }
        
        default:
            return state;
    }
}