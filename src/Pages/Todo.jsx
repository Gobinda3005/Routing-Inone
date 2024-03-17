import React from 'react'
import { Link } from 'react-router-dom'


const Todo = () => {
  return (
    <div>
         <p>
            <span className='badge bg-danger text-light'>404</span>Not found
            <br/>
            Page under Construction 
        </p>
        <Link to= '/'>Go Back</Link>
    </div>
  )
}

export default Todo