import React from 'react'
import { GoSun } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from 'react-router-dom';
const SideMenu = () => {
    return (
        <>
            <div className="w-1/4 h-screen p-4 pt-8 bg-white border-r-2 text-black-600">
                <h1 className="mb-4 text-2xl font-bold"><RxHamburgerMenu /></h1>
                <Link className='flex items-center gap-4 pb-2 text-center' to={'/'}><GoSun />My Day</Link>
                <Link className='flex items-center gap-4 pb-2 text-center' to={'/important'}><CiStar />Important</Link>
            </div>
        </>
    )
}

export default SideMenu