import React from 'react'
import '../Question2/Question2Option.css'
function Question6Option() {
    return (
        <div className='question2Answer'>
                        <form>
                        <div className='input'>
                        <input id='0' type='radio' value='0'/>
                        <label for htmlFor='0'>0</label>
                        </div>
                        <div className='input'>
                        <input id='1' type='radio' value='1'/>
                        <label for htmlFor='1'>1</label>
                        </div>
                        <div className='input'>
                        <input id='2' type='radio' value='2'/>
                        <label for htmlFor='2'>2</label>
                        </div>
                        <div className='input'>
                        <input id='3' type='radio' value='3'/>
                        <label for htmlFor='3'>3</label>
                        </div>
                        <div className='formButtons'>
                        <button className='button' disabled>Submit</button>
                        <button className='button show' >Show explanation</button>
                        </div>
                        </form>
                        
                    </div>
    )
}

export default Question6Option
