import React, { useState } from 'react'
import { GoSun } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const SideMenu = (props) => {
    const [burgerMenuFlag, setBurgerMenuFlag] = useState(true);
    const [activeLink, setActiveLink] = useState(0);

    const allTodoTask = props.todo.todolist.length;
    const importantTask = props.todo.todolist.filter(item => item.important).filter(item => !item.compelete).length
    const handleClick = () => {
        setBurgerMenuFlag(!burgerMenuFlag)
    }
    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <>
            {
                burgerMenuFlag
                    ?
                    <div className="w-1/5 h-screen pt-8 bg-white border-r-2 text-black-600">
                        <h1 className="p-4 mb-4 text-2xl font-bold" onClick={() => handleClick()}><RxHamburgerMenu /></h1>
                        <Link className={`flex items-center p-4 w-full gap-4 pb-2 text-center btn-icon ${activeLink === 0 ? 'bg-blue-100' : ''}`} to={'/'}onClick={() => handleLinkClick(0)}>
                            <GoSun />
                            <p className='flex-grow text-left'>My Day</p>
                            <span className='text-right text-gray-500'>{allTodoTask}</span>
                        </Link>
                        <Link className={`flex items-center w-full p-4 gap-4 pb-2 text-center btn-icon ${activeLink === 1 ? 'bg-blue-100' : ''}`} to={'/important'} onClick={() => handleLinkClick(1)}>
                            <CiStar />
                            <p className='flex-grow text-left'>Important</p>
                            <span className='text-right text-gray-500'>{importantTask}</span>
                        </Link>
                    </div>
                    :
                    <h1 className="mb-4 text-2xl font-bold menu" onClick={() => handleClick()}><RxHamburgerMenu /></h1>
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}
export default connect(mapStateToProps)(SideMenu)