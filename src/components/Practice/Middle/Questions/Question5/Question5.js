import React from 'react'
import DragDrop5 from './DragDrop5'
import './Question5.css'
function Question5() {
    return (
        <div className='question5'>
            
        <p>Five friends competed in a race.</p>
        <div className='question5Box'>
        <ul>
            <li>Pyrrha finished faster than Blake.</li>
            <li>The smallest difference in finishing times was between Pyrrha and Ruby.</li>
            <li>The largest difference in finishing times was between Ruby and Weiss.</li>
            <li>Yang finished either 1st or 3rd</li>
        </ul>
        </div>
        
        <p>(Note: Left and right are from the player's perspective).</p>
    
        <DragDrop5/>    
        <div className='question5Buttons'>
            <button className='button show'>Show explanation</button>
            <button className='button' disabled>Check answer</button>
        </div>
    </div>
    )
}

export default Question5
