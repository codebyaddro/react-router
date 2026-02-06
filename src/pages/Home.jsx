import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col gap-5'>
            Home
            <button className='border-2 border-blue-500 rounded-lg px-3 py-2 cursor-pointer w-fit' onClick={() => navigate('/student')}>Go to Student Page</button>
        </div>
    )
}

export default Home