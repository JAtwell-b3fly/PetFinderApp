import React from 'react';
import "../components/FooterStyles.css";

const Footer = () => {
  return (
    <div className='footer-box'>
        <div>
            <p>
                Contact Us
                <br />
                support@petsitterfinder.com
                <br />
                053 873 4692
            </p>
        </div>

        <div>
            <p>
                Privacy Policy
                <br />
                Terms of Service
            </p>

            <p style={{marginTop: "2rem", marginLeft: "-5rem"}}>
                @ 2024 Pet Sitter Finder | Version 1.0
            </p>
        </div> 

        <div>
            <p>
                Follow Us
                <br />
                Socials
            </p>
        </div>
    </div>
  )
}

export default Footer