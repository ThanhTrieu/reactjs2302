import { ADD_TODO, CHANGE_NAME_TODO } from "../actions/todo"

const initState = {
    name: '',
    listData: [],
    idTodo: 1
}

export const todoReducer = (state = initState, action) => {
    switch(action.type){
        case CHANGE_NAME_TODO:
            return {
                ...state,
                name: action.keyword
            }
        case ADD_TODO:
            return {
                ...state,
                ...{
                    idTodo: state.idTodo + 1,
                    listData: [...state.listData, {
                        nameTodo: action.nameTodo,
                        id: state.idTodo,
                        done: false
                    }],
                    name: ''
                }
            }
        default:
            return state;
    }
}