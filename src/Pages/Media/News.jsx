import React from 'react'
import Navbar from "../../Components/Layout/Navbar"
import Footer from '../../Components/Footer/Footer'
import NewsHeader from '../../Components/Media/News/NewsHeader'
import NewsDetails from '../../Components/Media/News/NewsDetails'

const News = () => {
  return (
    <Navbar>
        <NewsHeader/>
        <NewsDetails/>
        <Footer/>
    </Navbar>
  )
}

export default News