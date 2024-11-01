import React, { useEffect, useState } from 'react'
import '../../components/Navbar/Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
function navbar() {

    const[sticky, setSticky] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    }, []);
    const [mobileMenu, setMoblieMenu] = useState(false)

    const toggleMenu = () => {
          mobileMenu ? setMoblieMenu(false) : setMoblieMenu(true);
    }
    
  return (
    <div>
      
      <nav className={`container ${sticky? 'dark-nav': ''}`}>
       <img src = {logo} alt =  " " className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}> Home </Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500}>About us</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Events</Link></li> 
            <li><Link to='contact' smooth={true} offset={-310} duration={500}><button className='btn light-btn'>Contact Us</button></Link></li>
        </ul>
        <img src = {menu} className='menu_icon' onClick={toggleMenu}/>
      </nav>
    </div>
  )
}

export default navbar