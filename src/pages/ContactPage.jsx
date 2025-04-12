import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import PageTitle from '../components/common/PageTitle'
import ContactSection from '../components/ContactSection'
import Footer from '../components/common/Footer'

function ContactPage() {
  return (
    <>
      <Topbar/>
      <Header/>
      <PageTitle
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "#" },
        ]}
      />
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default ContactPage