import React from 'react'
import './Event.css'
import e1 from '../../assets/e1.png'
import e2 from '../../assets/e2.png'
import e3 from '../../assets/e3.jpg'
import e4 from '../../assets/e4.png'
import arrow from '../../assets/arrow3.png'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
// import e5 from '../../assets/e5.png'
// import e6 from '../../assets/e6.png'
// import e7 from '../../assets/e7.jpg'
// import e8 from '../../assets/e8.png'
const Event = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            <img src = {e1} alt = " "/>
            <img src = {e2} alt = " "/>
            <img src = {e3} alt = " "/>
            <img src = {e4} alt = " "/>
        </div>
        <button className='btn1 light-btn '>See more here<img src = {arrow}/></button>
       
    </div>
  )
}

export default Event