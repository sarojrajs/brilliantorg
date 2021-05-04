import React, { useState } from 'react'
import './Middle.css'
import { AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
import Question1 from './Questions/Question1/Question1';
import Question2 from './Questions/Question2/Question2';
import Question2Options from './Questions/Question2/Question2Options';
import Question3 from './Questions/Question3/Question3';
import Question3Option from './Questions/Question3/Question3Option';
import Question4 from './Questions/Question4/Question4';
import Question5 from './Questions/Question5/Question5';
import Question6 from './Questions/Question6/Question6';
import Question6Option from './Questions/Question6/Question6Option';
function Middle() {

    const [question,setQuestion]=useState(1);

    const prevQuestion=()=>{
        if(question!==1){
            setQuestion(prev=>prev-1);
        }
    }

    const nextQuestion=()=>{
        if(question!==6){
            setQuestion(prev=>prev+1);
        }
    }

    return (
        <div className='middle'>
            <div className='question'>
                {question===1 && <Question1/>}
                {question===2 && <Question2/>}
                {question===3 && <Question3/>}
                {question===4 && <Question4/>}
                {question===5 && <Question5/>}
                {question===6 && <Question6/>}

            </div>
            <div className='navigator'>
                <button className='select'>Lesson 1</button>
                <h1>WarmUp Puzzle</h1>
                <div className='scroller'>
                    <button className='direction' onClick={prevQuestion} ><AiFillCaretLeft/></button>
                    <span className={(question===1) &&'point'} onClick={()=>{setQuestion(1)}}>&nbsp;</span>
                    <span className={(question===2) &&'point'} onClick={()=>{setQuestion(2)}}>&nbsp;</span>
                    <span className={(question===3) &&'point'} onClick={()=>{setQuestion(3)}}>&nbsp;</span>
                    <span className={(question===4) &&'point'} onClick={()=>{setQuestion(4)}}>&nbsp;</span>
                    <span className={(question===5) &&'point'} onClick={()=>{setQuestion(5)}}>&nbsp;</span>
                    <span className={(question===6) &&'point'} onClick={()=>{setQuestion(6)}}>&nbsp;</span>
                    <button className='direction' onClick={nextQuestion}><AiFillCaretRight/></button>
                    </div>
                    {question===2 && <Question2Options/>}
                    {question===3 && <Question3Option/>}
                    {question===6 && <Question6Option/>}
            </div>
        </div>
    )
}

export default Middle
