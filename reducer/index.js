import {combineReducers} from 'redux';
//total state likes this {visibilityFilter:'show_all',todos:[{...},{...}]}
//so,we divide it to two sections and prepare two reducer to change it
export const todos =(state=[],action)=>{//it must be const for module is stable
    switch(action.type){ 
        case 'ADD_TODO':
            return [...state,{id:action.id,text:action.text,completed:false}];
        case 'TOGGLE_TODO':
            return state.map((todo)=>{
                return  todo.id===action.id?{...todo,completed:!completed}:todo;
            }
               
            );
        default:
            return state;
    }
}
export const visibilityFilter=(state='show_all',action)=>{
    switch(action.type){
        case 'SETVISIBILITYFILTER':
            return action.filter;
        default:
            return state;
    }
}
const todoApp=combineReducers({
    visibilityFilter,
    todos
})
export default todoApp;