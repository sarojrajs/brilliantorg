import React, { useState } from 'react'
import './Cards.css';
import { BsFillLockFill } from "react-icons/bs";

function Cards({imglink,title,description,show}) {

    const [lock,setLock]=useState(true);

    const showText=()=>{
            setLock(!lock)
    }

    const hideText=()=>{
        setLock(!lock);
    }

    return (
        
            (show==="true")?
            <>
            <div className="cards">
            <img className='cardImage' src={imglink} alt=''/>
            <div>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>
            </>
            :
            <>
            <div className="cards hide" onMouseEnter={showText} onMouseLeave={hideText}>
            <img className='cardImage' src={imglink} alt=''/>
            <div className='text'>
                {!lock && <p>Included with Brilliant</p>}
              {lock && <p><BsFillLockFill/></p> }  
            </div>
            <div>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
        </div>
            </>
        
        
    )
}

export default Cards
