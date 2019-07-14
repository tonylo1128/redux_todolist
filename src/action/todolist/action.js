import * as todolistType from './type'

export function handleInputFun(inputVar){
    return{
        type: todolistType.HANDLE_INPUT,
        payload: inputVar
    }
}

export function addItemToTheList (inputTemp){
    return{
        type:todolistType.ADD_ITEM,
        payload:inputTemp
    }
}