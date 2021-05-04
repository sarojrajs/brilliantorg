import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <h2>Next Steps</h2>
                <div className='footerContents'>
                    <div className='footerBox'>
                        <img src='https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92' alt=''/>
                        <div className='footerBoxInfo'>
                            <h3>Mathematical Fundamentals</h3>
                            <p>The essential tools for mastering algebra, logic and number theory</p>
                        </div>
                    </div>
                    <div className='footerBox'>
                        <img src='https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92' alt=''/>
                        <div className='footerBoxInfo'>
                            <h3>Computer Science Fundamentals</h3>
                            <p>Wrap your mind around computational thinking from everyday tasks to algorithms</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
