import React from 'react'
import './Contact.css'
import msg from '../../assets/message.png'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.svg'
import arrow  from '../../assets/arrow2.png'
function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "180f3558-2912-4559-9f5b-c01205daf260");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src = {msg} alt = " "/></h3>
            <p>
               We'd love to hear
               from you! Whether you have 
               questions, feedback, or need assistance,
               our team is here to help. Please reach out using any of the methods below, and we'll get back to you as soon as possible.
            </p>
            <ul>
                <li><img src = {email} alt=''/>test@gmail.com</li>
                <li><img src = {phone} alt=''/>+913333222231</li>
                <li><img src = {location} alt=''/>VIT BHOPAL Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh 466114</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name = 'phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='Enter your message'></textarea>
                <button type='submit' className='btn light-btn'>Submit Now<img src={arrow}/></button>
           </form>
           <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact