import React from 'react'
import Header from '../../Components/About/OrganizationStructure/Header'
import OrganizationalStructure from '../../Components/About/OrganizationStructure/OrganizationalStructure'
import Structure from "../../Components/About/OrganizationStructure/Structure"
import Navbar from '../../Components/Layout/Navbar'
import Footer from '../../Components/Footer/Footer'

const OrgStructure = () => {
  return (
    <Navbar>
      <Header/>
      <OrganizationalStructure/>
      <Structure/>
      <Footer/>
    </Navbar>
  )
}

export default OrgStructure