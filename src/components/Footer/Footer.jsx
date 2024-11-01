import React from 'react'
import inst from '../../assets/inst.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import discord from '../../assets/discord.png'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <p>Copyright © 2022 AI Club - VIT Bhopal</p>
        <div className='socials'>
            <img src= {inst}/>
            <img src= {linkedin}/>
            <img src= {github}/>
            <img src= {discord}/>
        </div>
    </div>
  )
}

export default Footer