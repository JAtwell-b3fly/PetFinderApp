import React from 'react';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div>
      <NavBar />

      <div>
        <h1 style={{textAlign: "center"}}>Profile</h1>

        <div className='profile-box'>
          <div className='profile-dashboard'>

          </div>

          <div className='profle-info-sec'>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile