import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Event from './components/Events/Event'
import Title from './components/Title/Title'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About/>
      <div className='container'>
         <Title subTitle="Our Events"  title= "Showcase your skill" />
         <Event/>
      </div>
      
      <Title subTitle="Contact Us"  title= "Join our community" />
      
     <Contact/>
      <Footer/>
    </div>
  )
}

export default App