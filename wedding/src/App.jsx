import { useState } from 'react'
import './App.css'
import BannerCarousel from './components/BannerCarousel'
import Weds from './components/weds'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import Slider from './components/Slider'
import images from './images'
import LiveStream from './components/LiveStream'
import PhotoAlbumDesktop from './components/PhotoAlbumDesktop'
function App() {
  return (
    <div className="App">
      <Navbar />
       <BannerCarousel/>
       <Weds/>
       <LiveStream embedId="evD9fEEWPzg"/>
       <PhotoAlbumDesktop/>
       <Footer />

       {/* <Slider slides={images}/> */}
    </div>
  )
}

export default App
