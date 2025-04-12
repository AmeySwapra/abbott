import React from 'react'
import Topbar from '../components/common/Topbar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ServiceSection from '../components/ServiceSection'
import AboutSection from '../components/AboutSection'
import AboutUsSection from '../components/AboutUsSection'
import ProductCarousel from '../components/ProductCarousel'
import TestimonialsSection from '../components/TestimonialsSection'
import BannerSection from '../components/BannerSection'

function HomePage() {
  return (
      <>
        <Topbar/>
        <Header/>
        <BannerSection/>
        <AboutSection/>
        <ServiceSection/>
        <AboutUsSection/>
        <ProductCarousel/>
        <TestimonialsSection/>
        <Footer/>
      </>
  )
}

export default HomePage