import * as todolistType from "./type";

export function handleInputFun(inputVar) {
  return {
    type: todolistType.HANDLE_INPUT,
    payload: inputVar
  };
}

export function handleInputFun2(inputVar) {
  return {
    type: todolistType.HANDLE_INPUT2,
    payload: inputVar
  };
}

export function addItemToTheList(inputTemp) {
  return {
    type: todolistType.ADD_ITEM,
    payload: inputTemp
  };

  
}

export function makeAsDoneFun(index, item ) {
    return {
      type: todolistType.MAKEASDONE,
      payload: { index, item }
    };
  }

  export function deleItemFun(item, index){
    return{
      type: todolistType.DELEITEM,
      payload: {item, index}
    }
  }
  
  export function handleEditFun(item, index){
    return{
      type: todolistType.HANDLINGEDIT,
      payload: {item, index}
    }
  }

  export function sendFinishUpdate(item, index, inputTemp){
    return{
      type: todolistType.FINISHUPDATE,
      payload: {item, index, inputTemp}
    }
  }