import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-5 py-3 bg-emerald-600'>
            <h1 className='text-white'>React Router</h1>
            <ul className='flex gap-3 justify-center items-center'>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'text-red-500' : 'text-white'} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'text-red-500' : 'text-white'} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'text-red-500' : 'text-white'} to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'text-red-500' : 'text-white'} to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'text-red-500' : 'text-white'} to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'text-red-500' : 'text-white'} to="/student">Student</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar