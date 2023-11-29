import React from 'react'
import { GoSun } from 'react-icons/go'
import { RiMoreLine } from "react-icons/ri";
import { BiSortAlt2 } from "react-icons/bi";
import { HiOutlineFolderMinus } from "react-icons/hi2";
import { BsLightbulb } from "react-icons/bs";
import AddNewToDo from './AddNewToDo';
import TodoList from './TodoList';


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const MyDay = () => {
  const date = new Date();
  const weekDay = days[date.getDay()];
  const day =  date.getDate();
  const month = months[date.getMonth()];

  return (
    <>
    <div className='flex justify-between flex-grow p-2 px-4 h-fit md:h-20 item-center md:items-start md:p-6'>
      <div className='my-auto'>
        <div className='flex items-center gap-3 text-lg md:text-2xl'>
        <GoSun className=''/> My Day <RiMoreLine className='text-gray-500' />
        </div>
        <div className='text-xs text-gray-500 md:text-sm'>
          {weekDay}, {month} {day}
        </div>
      </div>
      <div className='flex items-center gap-3 text-xs text-gray-500 md:text-sm'>
        <div className='flex items-center gap-1'><BiSortAlt2 /> Sort</div>
        <div className='flex items-center gap-1'><HiOutlineFolderMinus /> Group</div>
        <div className='flex items-center gap-1'><BsLightbulb /> Suggestions</div>
      </div>      
    </div>
    <AddNewToDo />
    <TodoList />
    </>
  )
}

export default MyDay