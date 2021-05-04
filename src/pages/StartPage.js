import React from 'react'
import Banner from '../components/Banner/Banner'
import Courses from '../components/Courses/Courses'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function StartPage() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Courses/>
            <Footer/>
        </div>
    )
}

export default StartPage
