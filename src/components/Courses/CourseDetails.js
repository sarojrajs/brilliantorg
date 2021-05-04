import React, { useEffect, useRef, useState }  from 'react'
import { HiArrowNarrowDown } from "react-icons/hi";
import Cards from './Cards'
import CourseHeading from './CourseHeading'
import {useOverflow} from 'use-overflow'
function CourseDetails({lesson}) {
    const horizontalRef=useRef(null);
    const {refXOverflowing}=useOverflow(horizontalRef);
    const right=useRef(null);
    const [show,setShow]=useState(true);
    const [chapter,setChapter]=useState(lesson);

    useEffect(()=>{
        if(!refXOverflowing){
            setShow(false);
        }
    },[])

    const hide=()=>{
        setShow(false);
        horizontalRef.current.classList.toggle('courseTopicsGrid');
        right.current.style.display='grid';
    }

    const toggle=()=>{
       
        horizontalRef.current.classList.toggle('courseTopicsGrid');
        setShow(true);
        right.current.style.display='none';
    }
    return (
        // <div style={{marginBottom:'50px'}}>
        //     <CourseHeading 
        //     number='1'
        //     heading='Introduction'
        //     description='Put Your logic to the test with these warmups!'
        //     value={show}
        //     onClick={hide}
        //     />
        //     <div className='courseTopics' ref={horizontalRef}>
        //     <Cards
        //     imglink='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'
        //     title='Warmup Puzzle'
        //     description='Get Started with some login warmups'
        //     />
        //     <Cards
        //     imglink='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'
        //     title='Warmup Puzzle'
        //     description='Get Started with some login warmups'
        //     />
        //     <Cards
        //     imglink='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'
        //     title='Warmup Puzzle'
        //     description='Get Started with some login warmups'
        //     />
        //     <Cards
        //     imglink='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'
        //     title='Warmup Puzzle'
        //     description='Get Started with some login warmups'
        //     />
        //     <Cards
        //     imglink='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'
        //     title='Warmup Puzzle'
        //     description='Get Started with some login warmups'
        //     />
        //     <Cards
        //     imglink='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'
        //     title='Warmup Puzzle'
        //     description='Get Started with some login warmups'
        //     />
        //     <Cards
        //     imglink='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'
        //     title='Warmup Puzzle'
        //     description='Get Started with some login warmups'
        //     />
            
        //     {refXOverflowing && <div ref={right} className='right'><button onClick={toggle}><HiArrowNarrowDown/></button></div>}
        // </div>
        // </div>

        <div style={{marginBottom:'50px'}}>
            <CourseHeading 
            number={chapter.number}
            heading={chapter.title}
            description={chapter.titleDescription}
            value={show}
            onClick={hide}
            />
            <div className='courseTopics' ref={horizontalRef}>
            {
                chapter.course.map(details=>(
                    <Cards
                    imglink={details.image}
                    title={details.courseName}
                    description={details.courseDescription}
                    show={details.show}
                    />
                ))
            }
           
            
            
            {refXOverflowing && <div ref={right} className='right'><button onClick={toggle}><HiArrowNarrowDown/></button></div>}
        </div>
        </div>
    )
}

export default CourseDetails
