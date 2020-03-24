let nextAvaliableId = 0;
export const ADD_TODO = (text)=>{
    return {
        type:'ADD_TODO',
        id:nextAvaliableId++,
        text                //only transport necessary paraments to add a todo,the other funtion
    }                       //should be placed in reducer
}
export const TOGGLE_TODO = (id)=>{
    return {
        type:'TOGGLE_TODO',
        id
    }
}
export const SET_VISIBILITY_FILTER = (filter)=>{
    return {
        type:'SET_VISIBILITY_FILTER',
        filter
    }
}