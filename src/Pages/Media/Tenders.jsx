import React from 'react'
import Navbar from '../../Components/Layout/Navbar'
import Footer from '../../Components/Footer/Footer'
import TendersHeader from '../../Components/Media/Tenders/TendersHeader'
import CardTender from '../../Components/Media/Tenders/CardTender'

const Tenders = () => {
  return (
    <Navbar>
        <TendersHeader/>
        <CardTender />
        <Footer/>
    </Navbar>
  )
}

export default Tenders