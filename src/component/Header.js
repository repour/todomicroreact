import React, { useState } from 'react'
import { BiSolidGrid } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiQuestionMark } from "react-icons/ri";
import { TbBellRinging2 } from "react-icons/tb";
import { VscSearch } from "react-icons/vsc";
import IconInput from './SearchInput';

const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    return (
        <>
            <div className='flex justify-between p-4 text-white bg-blue-600'>
                <div className='flex items-center gap-1'><BiSolidGrid className='mr-4 text-3xl' />TO DO</div>
                <div>
                    <IconInput value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} icon={VscSearch} />
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