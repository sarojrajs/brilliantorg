import React from 'react'
import './Question2Option.css'
function Question2Options() {
    return (
        <div className='question2Answer'>
                        <form>
                        <div className='input'>
                        <input id='Black' type='radio' value='Black'/>
                        <label for htmlFor='Black'>Black</label>
                        </div>
                        <div className='input'>
                        <input id='White' type='radio' value='White'/>
                        <label for htmlFor='White'>White</label>
                        </div>
                        <div className='input'>
                        <input id='others' type='radio' value='Others'/>
                        <label for htmlFor='Others'>There isn't enough information to be certain</label>
                        </div>
                        <div className='formButtons'>
                        <button className='button' disabled>Submit</button>
                        <button className='button show' >Show explanation</button>
                        </div>
                        </form>
                        
                    </div>
    )
}

export default Question2Options
