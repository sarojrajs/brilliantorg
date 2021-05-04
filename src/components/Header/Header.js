import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <div className='headerLeft'>
                <img className='headerImage' src='https://upload.wikimedia.org/wikipedia/en/8/81/Brilliant_Logo.svg' alt=''/>
                <p>Brilliant</p>
            </div>
            <div className='headerCenter'>
                <a href="#">Today</a>
                <a href="#">Courses</a>
                <a href="#">Practice</a>
            </div>
            <div className='headerRight'>
                <button className='button login'>Log in</button>
                <button className='button signup'>Sign up</button>
            </div>
        </div>
    )
}

export default Header
