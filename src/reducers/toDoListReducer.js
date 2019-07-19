import * as TypeofToDoList from '../action/todolist/type'



const initState={
    theList:[],
    handleInputVar:"",
    handleInputVar2:""
    
    
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
        
        case TypeofToDoList.HANDLE_INPUT2:
            return{
                ...state,
                handleInputVar2: payload
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
                // ...state,
                // theList: state.theList,map (item, index) => (index===payload.index)
                // ? 
                // {...payload.item, 
                //     handleUpdate: item.handleUpdate===0 ? 1:0}:item )

                ...state,
                theList: state.theList.map((item, index) => (index === payload.index ) 
                ? 
                {...payload.item, 
                    handleUpdate: item.handleUpdate === 0 ? 1 : 0 }: item )
            }

        case TypeofToDoList.FINISHUPDATE:
            return{
                ...state,
                theList: state.theList.map((item, index) => (index === payload.index)
                ?
                { ...payload.item, 
                    theItem : state.handleInputVar2  }:item),


                    //上面個個位，屌，改緊都唔撚岩，唔知錯咩9   T.T
                
                ...state,
                theList: state.theList.map((item, index) => (index === payload.index ) 
                ? 
                {...payload.item, 
                    handleUpdate: item.handleUpdate === 1 ? 0 : 1 }: item )
                
        

                
            }
        
        default:
            return state;
    }
}