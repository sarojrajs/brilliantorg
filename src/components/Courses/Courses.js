import React from 'react'
import CourseDetails from './CourseDetails'
import {syllabus} from '../../Data/Syllabus'
import './Courses.css'

function Courses() {
   
    return (
        <div className='courses' >
            {
                syllabus.map(chapter=>(
                    <CourseDetails lesson={chapter}/>
                ))
            
                }
        </div>
    )
}

export default Courses
