import React, { useRef, useState } from 'react'
import './Banner.css'
import logic from '../../images/Capture.PNG'
function Banner() {

    const[show,setShow]=useState(false);
    const readmoreRef=useRef();
    const hide=()=>{
        setShow(true);
        readmoreRef.current.style.display='none';
    }

    return (
        <div className='banner'>
            <div className='bannerleft'>
                <a href="#" className='link top'>&#60; Back to all courses</a>
                <h1 className='title'>Logic</h1>
                <p className='stretch'>Stretch your analytic muscles with knights, knaves, logic gates, and more!</p>
                <p>The beginning of our introductory math journey is Logic. Through these challenging problem
                solving exercises, you'll construct the critical thinking skills that are the basis for mathematical 
                reasoning.</p>
                <p>You'll use limited information to make predictions – eliminating the impossible to uncover the truth. 
                    This course builds up to some truly mind-bending challenges
                    !<span onClick={hide} className='link' ref={readmoreRef}>Read more</span></p>

                {show &&
                <>
                    <p>By the end of this course, you'll be able to spot logical fallacies, navigate some strategic game theory, understand machine logic, and use the symbolic languages of logic to understand fun riddles.</p>
                    <div className='topics_covered'>
                        <h4 className='topics'>Topics covered</h4>
                        <div className='topics_index'>
    
                        <div className='topics_left'>
                            <p>Binary</p>
                            <p>Truth Table</p>
                            <p>Login Gates</p>
                            <p>Venn and Euler Diagram</p>
                            <p>Propositional Logic</p>
                            <p>The Square of Opposition</p>
                        </div>
                        <div className='topics_right'>
                            <p>De Morgan's Law</p>
                            <p>Inclusive and Exclusive OR</p>
                            <p>Combinatorics</p>
                            <p>Knight and Knave Puzzles</p>
                            <p>Combinatorial Game Algorithms</p>
                        </div>
                        </div>
                    </div>
                    </>
                }
                <button>View prerequisites and next steps</button>
            </div>
        
            <div className='bannerRight'>
                <div className='whiteBox'>
                    <img className='logicImage' src={logic} alt=''/>
                    <div className='info'>
                        <div className='infoLeft'>
                            <h1>37</h1>
                            <h5>Interactive quizzes</h5>
                        </div>
                        <div className='infoRight'>
                            <h1>265+</h1>
                            <h5>Concepts and exercises</h5>
                        </div>
                    </div>
                    <button className='startButton'>Start Course</button>
                </div>
            </div>
       
        </div>
    )
}

export default Banner
