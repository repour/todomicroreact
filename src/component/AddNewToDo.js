import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa";
import './addNewTodo.css'
import { SlCalender } from "react-icons/sl";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoRepeat } from "react-icons/io5";


const AddNewToDo = () => {
    const [value, setValue] = useState('')
    return (
        <>
            <div className='flex items-center w-11/12 gap-3 p-4 mx-4 mt-6 text-blue-600 bg-white rounded-t shadow-md'>
                <FaRegCircle />
                <input type='text' className='w-11/12 input ' placeholder='Add a task' value={value} onChange={evt => setValue(evt.target.value)} />
            </div>
            <div className='flex justify-between w-11/12 p-2 px-4 mx-4 bg-gray-100 rounded-b shadow-md'>
                <div className='flex items-center gap-2 text-gray-600'><SlCalender /> <HiOutlineBellAlert /><IoRepeat /></div>
                {
                value
                ?
                <button className='p-2 bg-white' >Add</button>
                :
                <button className='p-2 text-gray-600 bg-white' disabled>Add</button>

                }
            </div>
        </>
    )
}

export default AddNewToDo