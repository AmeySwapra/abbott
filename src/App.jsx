import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about-us' element={<AboutPage/>} />
            <Route path='/product' element={<ProductPage/>} />
            <Route path='/contact-us' element={<ContactPage/>} />
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App