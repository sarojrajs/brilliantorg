import React from 'react'
import './CourseHeading.css'
function CourseHeading({number,heading,description,value,onClick}) {

    const handleChange=()=>{
        onClick();
    }

    return (
        <div className='courseHeading'>
            <div className='number'>{number}</div>
            <div className='heading'>
                <h1>{heading}</h1>
                <p>{description}</p>
                <p className='collapse' onClick={handleChange}>{value && 'collapse'}</p>
            </div>
        </div>
    )
}

export default CourseHeading
