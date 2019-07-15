import * as todolistType from "./type";

export function handleInputFun(inputVar) {
  return {
    type: todolistType.HANDLE_INPUT,
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
