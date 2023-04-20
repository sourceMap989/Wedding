import { useState } from 'react'
import './App.css'
import BannerCarousel from './components/BannerCarousel'
import Weds from './components/weds'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
       <BannerCarousel/>
       <Weds/>
       <Footer />
    </div>
  )
}

export default App
