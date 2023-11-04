import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <>
      <div className="footercontainer">
        <div className="getintouch">GET IN TOUCH</div>
        <div className="contactinfo">
        <h5>Contact Info</h5>
        <p><i class="fa-brands fa-whatsapp"></i> WhatsApp: +91-6306266557</p>
        <p><i class="fa-solid fa-phone"></i> Calling: +91- 8318500748</p>
        <p><i class="fa-regular fa-envelope"></i> career@nayepankh.com</p>
        <div className="contactdiv">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
        </div>
        </div>
        <div className="address">
          <h5>Address</h5>
          <p><i class="fa-solid fa-location-dot"></i>Office Address: 104A/279 P.Road Kanpur</p>                                      
          <p>Pin Code: 208012</p>


        </div>
      </div>
    </>
  )
}

export default Footer
