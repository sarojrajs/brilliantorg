import React from 'react'
import DrapDrop4 from './DrapDrop4'
import './Question4.css'
function Question4() {
    return (
        <div className='question4'>
            
        <p>Arrange the cards to make the following true:</p>
        <ul>
            <li>The king is in one of the two middle spaces. </li>
            <li>The queen is left of the jack and right of the ace.</li>
            <li>The ace is directly next to the queen.</li>
        </ul>
        <p>(Note: Left and right are from the player's perspective).</p>
    
            <DrapDrop4/>
        <div className='question4Buttons'>
            <button className='button show'>Show explanation</button>
            <button className='button' disabled>Check answer</button>
        </div>
    </div>
    )
}

export default Question4
