import { ADD_TODO, DELETE_TODO, FAIL_REQUEST, GET_TODO_LIST, MAKE_REQUEST, UPDATE_TODO } from "./ActionType"


const initialstate = {
    loading: true,
    todolist: [],
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_TODO_LIST:
            return {
                loading: false,
                errmessage: '',
                todolist: action.payload
            }

        case DELETE_TODO: return {
            ...state,
            loading: false
        }

        case ADD_TODO: return {
            ...state,
            loading: false
        }

        case UPDATE_TODO: return {
            ...state,
            loading: false
        }
        default: return state
    }
}