import React from 'react'
import DragDrop from './DragDrop'
import './Question1.css'
function Question1() {
    return (
        <div className='question1'>
            
            <p>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
            <ul>
                <li>Joseph is not the youngest. </li>
                <li>Kevin is the oldest.   </li>
                <li>Nicholas is not the oldest. </li>
            </ul>
        
                <DragDrop/>
            <div className='question1Buttons'>
                <button className='button show'>Show explanation</button>
                <button className='button' disabled>Check answer</button>
            </div>
        </div>
    )
}

export default Question1
