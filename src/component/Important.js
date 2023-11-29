import React, { useState } from 'react'
import { RiMoreLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { FaRegCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoRepeat } from "react-icons/io5";
import { connect, useDispatch } from 'react-redux';
import { FetchTodoList, FunctionAddTodo } from '../Redux/Action';
import TodoListImportant from './TodoListImportant';

const Important = (props) => {

  const [todo, setTodo] = useState('')
  const dispatch=useDispatch();

  const handlesubmit = (e) => {
      const todoobj = { todo, compelete:false, important:true};
      dispatch(FunctionAddTodo(todoobj));
      setTodo('')
      props.loadTodo();
  }

  return (
    <>
      <div className='flex items-center justify-between flex-grow p-2 px-4 md:items-start h-fit md:h-20 md:p-6'>
        <div>
          <div className='flex items-center gap-3 text-2xl text-blue-600'>
            <CiStar /> Important <RiMoreLine />
          </div>
        </div>
        <div className='flex items-center gap-3 text-sm text-gray-500'>
          <div className='flex items-center gap-1 text-blue-600'><BiSortAlt2 /> Sort</div>
        </div>
      </div>

      <div className='flex items-center w-11/12 gap-3 p-4 mx-4 mt-6 text-blue-600 bg-white rounded-t shadow-md'>
        <FaRegCircle />
        <input type='text' className='w-11/12 input ' placeholder='Add a task' value={todo} onChange={evt => setTodo(evt.target.value)} />
      </div>
      <div className='flex justify-between w-11/12 p-2 px-4 mx-4 bg-gray-100 rounded-b shadow-md'>
        <div className='flex items-center gap-2 text-gray-600'><SlCalender /> <HiOutlineBellAlert /><IoRepeat /></div>
        {
          todo
            ?
            <button className='p-2 text-blue-600 bg-white' onClick={() => handlesubmit()}>Add</button>
            :
            <button className='p-2 text-gray-600 bg-white' disabled>Add</button>

        }
      </div>

      <TodoListImportant />
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Important)