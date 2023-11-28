import React from 'react'
import { BiSolidGrid } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiQuestionMark } from "react-icons/ri";
import { TbBellRinging2 } from "react-icons/tb";

const Header = () => {
    return (
        <>
            <div className='flex justify-between p-4 text-white bg-blue-600'>
                <div className='flex items-center gap-1'><BiSolidGrid className='mr-4 text-3xl' />TO DO</div>
                <div>
                    <input type='text' placeholder='Search' className='p-1 rounded input px-14' />
                </div>
                <div className='flex items-center gap-1'>
                    <IoSettingsOutline />
                    <RiQuestionMark />
                    <TbBellRinging2 />
                </div>
            </div>
        </>
    )
}

export default Header