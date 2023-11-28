import { ADD_TODO, DELETE_TODO, FAIL_REQUEST, GET_TODO_LIST, MAKE_REQUEST, UPDATE_TODO } from "./ActionType"
import axios from "axios"


export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getTodoList=(data)=>{
    return{
        type:GET_TODO_LIST,
        payload:data
    }
}
export const deleteTodo=()=>{
    return{
        type:DELETE_TODO
    }
}
export const addTodo=()=>{
    return{
        type:ADD_TODO
    }
}
export const updateTodo=()=>{
    return{
        type:UPDATE_TODO
    }
}

export const FetchTodoList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.get('http://localhost:8000/alltodo').then(res=>{
            const todolist=res.data;
            dispatch(getTodoList(todolist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}

export const RemoveTodo=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.delete('http://localhost:8000/alltodo/'+code).then(res=>{
            dispatch(deleteTodo());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}

export const FunctionAddTodo=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.post('http://localhost:8000/alltodo',data).then(res=>{
            dispatch(addTodo());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}

export const FunctionUpdateTodo=(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
        axios.put('http://localhost:8000/alltodo/'+code,data).then(res=>{
            dispatch(updateTodo());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     
    }
}
