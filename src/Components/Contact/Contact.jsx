import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9911d2db-5ae4-4b13-8672-707b7405c28c");

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
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eaque facere explicabo repellat minima, voluptatem eveniet consectetur unde delectus velit, recusandae doloribus debitis rem ea.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />moinsen2@blindtextgenerator.com</li>
                <li><img src={phone_icon} alt="" />+44-7445381114</li>
                <li><img src={location_icon} alt="" />2199 Pacocha Plains,  <br />Nelliehaven, TN 79119</li>
            </ul>
        </div>
        <div className="contact-col"></div>
        <form  onSubmit={onSubmit}>
          <label> Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label> Phone Number</label>
          <input type="tel" name='phone'placeholder='Enter your mobile number'required  />
          <label>Write your message here </label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
    </div>
  )
}

export default Contact