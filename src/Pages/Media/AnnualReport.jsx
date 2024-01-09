import React from 'react'
import Navbar from '../../Components/Layout/Navbar'
import Footer from '../../Components/Footer/Footer'
import AnnualReportHeader from '../../Components/Media/AnnualReport/AnnualReportHeader'
import CardAnnualReport from '../../Components/Media/AnnualReport/CardAnnualReport'

const AnnualReport = () => {
  return (
    <Navbar>
        <AnnualReportHeader/>
        <CardAnnualReport />
        <Footer/>
    </Navbar>
  )
}

export default AnnualReport