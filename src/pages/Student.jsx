import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    const { id } = useParams()
    return (
        <div>
            <h3>Student Page</h3>
            {id && `Student id : ${id}`}
        </div>
    )
}

export default Student