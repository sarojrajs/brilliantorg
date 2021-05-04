import React from 'react'
import './BodySection.css'
import Middle from './Middle/Middle'
import Sidebar from './Sidebar/Sidebar'

function BodySection() {
    return (
        <div className='bodySection'>
            <div className='leftSidebar'>
                <Sidebar/>
            </div>
            <div className='middle'>
                <Middle/>
            </div>
            
        </div>
    )
}

export default BodySection
