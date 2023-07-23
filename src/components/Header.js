import React from 'react'
import { FaGithub } from "react-icons/fa6";

function Header() {
    return (
        <>
            <div className='bg-transparent px-10 py-5 font-bold  flex items-center justify-center gap-4'>
                <FaGithub className='text-4xl text-sky-100'/>
                <h1 className='text-3xl text-sky-100'>GITHUB APIS</h1>
            </div>
        </>
    )
}

export default Header