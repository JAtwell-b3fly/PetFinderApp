import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import logo from "../assets/logo.jpg";

const About = () => {
  return (
    <div>
      <NavBar />

      <div style={{overflowY:"auto", maxHeight: "32rem"}}>
        <div>
          <div className='app-name-about' style={{left:"45rem", marginTop: "1rem"}}>
            <h4>Pet Sitter <br />Finder</h4>
          </div>

          <svg className='logo-about' width="100%" height="100%">
            <image href={logo} width="100%" height="100%" />
          </svg>
        </div>

        <div style={{marginTop:"-15rem"}}>
          <h1 style={{textAlign: "center"}}>About Us</h1>

          <h4 style={{textAlign: "center", margin: "2rem"}}>
            Welcome to Pet Sitter Finder, your go to platform for finding reliable
            pet sitters near you. At Pet Sitter Finder, we understand the importance
            of finding the perfect pet sitter who can meet your special requests, fit within
            your budget, and accommodate your schedule. Whether you need someone to care
            for your furry friend while you're at work, on vacation, or attending to other
            commitments, Pet Sitter Finder is here to help.
          </h4>

          <h3 style={{textAlign: "center"}}>Our Mission</h3>

          <h4 style={{textAlign: "center", margin: "2rem"}}>
          Our mission at Pet Sitter Finder is to connect pet owners with trustworthy and experienced 
          pet sitters who are passionate about providing exceptional care to your beloved pets. 
          We strive to make pet care convenient, flexible, and stress-free, ensuring that both pets 
          and owners have peace of mind knowing that their furry companions are in good hands.
          </h4>

          <h3 style={{textAlign: "center"}}>Key Features</h3>

          <h4 style={{textAlign: "center", margin: "2rem"}}>
            <ul>
              <li>Find Qualified Pet Sitters: Browse through a curated list of qualified pet sitters 
                who meet your specific needs and preferences.</li>

              <li>Customize Your Search: Filter pet sitters based on special requests, budget, 
                availability, and more.</li>

              <li>Seamless Booking: Easily book appointments with pet sitters directly through the app, 
                making scheduling pet care hassle-free.</li>

              <li>Secure Communication: Communicate with pet sitters securely within the app, 
                ensuring privacy and confidentiality.</li>

              <li>Reliable Support: Our dedicated support team is here to assist you with any questions, 
                concerns, or assistance you may need.</li>
            </ul>
          </h4>

          <h3 style={{textAlign: "center"}}>Our Team</h3>

          <h4 style={{textAlign: "center", margin: "2rem"}}>
          Pet Sitter Finder is developed and maintained by a team of pet lovers, technology enthusiasts, 
          and pet care professionals dedicated to providing the best possible experience for pet owners and pet 
          sitters alike. We are committed to continuously improving our platform to meet the evolving needs of 
          our users and their furry companions.
          </h4>

          <h3 style={{textAlign: "center"}}>Contact Us</h3>

          <h4 style={{textAlign: "center", margin: "2rem"}}>
          Have questions, feedback, or suggestions? We'd love to hear from you!

          <ul>
            <li>Email: support@petsitterfinder.com</li>
            <li>Phone: 053 873 4692</li>
            <li>Follow us on social media: @PetSitterFinder</li>
          </ul>
          </h4>

          <h3 style={{textAlign: "center"}}>Privacy Policy and Terms of Service</h3>

          <h4 style={{textAlign: "center", margin: "2rem"}}>
          For information about how we handle your data and your rights and responsibilities when using Pet 
          Sitter Finder, please refer to our Privacy Policy and Terms of Service.
          </h4>

          <h3 style={{textAlign: "center"}}>Version</h3>

          <h4 style={{textAlign: "center", margin: "2rem"}}>
          Pet Sitter Finder v1.0
          </h4>

          <h4 style={{textAlign: "center", margin: "2rem"}}>
          Thank you for choosing Pet Sitter Finder for your pet care needs. We're here to make pet sitting 
          easier and more convenient for you and your furry friends.
          </h4>
        </div>
      </div>

      <Footer />
    </div>
    
  )
}

export default About;