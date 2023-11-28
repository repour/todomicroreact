import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { FetchTodoList, FunctionUpdateTodo, RemoveTodo } from '../Redux/Action';
import { connect, useDispatch } from 'react-redux';
import { GiConfirmed } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";




const TodoList = (props) => {
    const importantTodo = props.todo.todolist.filter(item => item.important)
    const notCompeleteTodo = importantTodo.filter(item => !item.compelete)
    const [editTodo, setEditTodo] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        props.loadTodo();
    }, [])
    const handledelete = (code) => {
        if (window.confirm('Do you want to remove?')) {
            props.removeTodo(code);
            props.loadTodo();
        }
    }
    const handleCompelete = (todo) => {
        const todoobj = {
            ...todo,
            compelete: !todo.compelete
        }
        dispatch(FunctionUpdateTodo(todoobj, todo.id))
        props.loadTodo();
    }
    const handleEdit = (todo) => {
        setEditTodo(todo.todo)
        const todoobj = {
            ...todo,
            editMode: !todo.editMode
        }
        dispatch(FunctionUpdateTodo(todoobj, todo.id))
        props.loadTodo();
    }
    const handleCancelEdit = (todo) => {
        const todoobj = {
            ...todo,
            editMode: !todo.editMode
        }
        setEditTodo('')
        dispatch(FunctionUpdateTodo(todoobj, todo.id))
        props.loadTodo();
    }
    const handleConfirmEdit = (todo) => {
        if (editTodo) {
            const todoobj = {
                ...todo,
                todo: editTodo,
                editMode: !todo.editMode
            }
            setEditTodo('')
            dispatch(FunctionUpdateTodo(todoobj, todo.id))
            props.loadTodo();
        }
    }
    const handleImportant = (todo) => {
        const todoobj = {
            ...todo,
            important: !todo.important
        }
        dispatch(FunctionUpdateTodo(todoobj, todo.id))
        props.loadTodo();
    }


    return (
        props.todo.loading ? <div><h2>Loading...</h2></div> :
            props.todo.errmessage ? <div><h2>{props.todo.errmessage}</h2></div> :
                <>
                    {
                        notCompeleteTodo && notCompeleteTodo.map(item =>
                        (
                            !item.editMode
                                ?
                                <div key={item.id} className='flex items-center justify-between w-11/12 p-2 mx-4 mt-2 bg-white rounded shadow-md'>
                                    <div className='flex items-center gap-4 text-2xl text-blue-600'>
                                        <FaRegCircle className='btn-icon' onClick={() => handleCompelete(item)} />
                                        <div className='text-left'>
                                            <p className='text-sm text-black'>{item.todo}</p>
                                            <p className='text-sm text-gray-500'>Tasks</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 text-2xl text-blue-500'>
                                        {
                                            item.important?
                                            <FaStar  className='btn-icon' onClick={() => handleImportant(item)}/>:
                                            <CiStar className='btn-icon' onClick={() => handleImportant(item)}/>

                                        }                                        <LuPencil className='btn-icon' onClick={() => handleEdit(item)} />
                                        <FaRegTrashAlt className='text-red-400 btn-icon' onClick={() => handledelete(item.id)} />
                                    </div>
                                </div>
                                :
                                <div key={item.id} className='flex items-center justify-between w-11/12 p-2 mx-4 mt-2 bg-white rounded shadow-md'>
                                    <div className='flex items-center gap-4 text-2xl text-blue-600'>
                                        <FaRegCircle className='btn-icon' onClick={() => handleCompelete(item)} />
                                        <div className='text-left'>
                                            <input type='text' className='text-sm text-black input' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                                            <p className='text-sm text-gray-500'>Tasks</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4 text-2xl text-blue-500'>
                                        <GiConfirmed className='btn-icon' onClick={() => handleConfirmEdit(item)} />
                                        <GiCancel className='text-red-400 btn-icon' onClick={() => handleCancelEdit(item)} />
                                    </div>
                                </div>
                        )
                        )
                    }
                </>
    )
}
const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadTodo: () => dispatch(FetchTodoList()),
        removeTodo: (code) => dispatch(RemoveTodo(code))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)