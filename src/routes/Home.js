import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

import josh from "../assets/joshua-albatross.jpeg";
import john from "../assets/john-doe.jpg";

const Home = () => {

  const navigate = useNavigate();

  const makeBooking = () => {
    navigate("/makeAppointment");
  }

  return (
    <div>
      <NavBar />

      <div style={{overflowY:"scroll", overflowX:"unset", maxHeight: "32rem"}}>
        <div className='header'>
          <h1 style={{marginLeft: "2rem", fontSize: "3rem"}}>Find a Pet Sitter</h1>

          <input type="text" placeholder="Set your location..." className='searchbar' />
        </div>

        <div>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div className='card'>
            <div className='sitter-image-div'>
              <svg className='sitter-image' width="100%" height="100%">
                <image href={josh} width="100%" height="100%" />
              </svg>
            </div>

            <div className='sitter-info'>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className='sitter-descr'>
                  <h4>Experienced local dog <br />and cat sitter</h4>
                </div>

                <div>
                  <p style={{fontSize:"larger", textAlign:"right"}}>50<br />/hour</p>
                </div>
              </div>
              
              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem"}}>Joshua</p>

                <p style={{fontSize:"large"}}>0,1km</p>
              </div>

              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem", color: "yellow", fontWeight: "bold"}}>4/5</p>

                <p style={{fontSize:"large", color: "yellow", fontWeight: "bold"}}>47</p>
              </div>

              <p style={{marginTop: "-1rem", fontSize:"large", color: "green", fontWeight: "bold"}}>Last Booked 1 hour ago</p>

              <button className='booking-btn' onClick={makeBooking}>
                Make Booking
              </button>
              
            </div>
          </div>

          <div className='card'>
            <div className='sitter-image-div'>
              <svg className='sitter-image' width="100%" height="100%">
                <image href={john} width="100%" height="100%" />
              </svg>
            </div>

            <div className='sitter-info'>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className='sitter-descr'>
                  <h4>Experienced local dog <br />and cat sitter</h4>
                </div>

                <div>
                  <p style={{fontSize:"larger", textAlign:"right"}}>50<br />/hour</p>
                </div>
              </div>
              
              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem"}}>John</p>

                <p style={{fontSize:"large"}}>0,1km</p>
              </div>

              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem", color: "yellow", fontWeight: "bold"}}>4/5</p>

                <p style={{fontSize:"large", color: "yellow", fontWeight: "bold"}}>47</p>
              </div>

              <p style={{marginTop: "-1rem", fontSize:"large", color: "green", fontWeight: "bold"}}>Last Booked 1 hour ago</p>

              <button className='booking-btn'  onClick={makeBooking}>
                Make Booking
              </button>
              
            </div>
          </div>

        </div>




        <div style={{display: "flex", flexDirection: "row"}}>
          <div className='card'>
            <div className='sitter-image-div'>
              <svg className='sitter-image' width="100%" height="100%">
                <image href={john} width="100%" height="100%" />
              </svg>
            </div>

            <div className='sitter-info'>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className='sitter-descr'>
                  <h4>Experienced local dog <br />and cat sitter</h4>
                </div>

                <div>
                  <p style={{fontSize:"larger", textAlign:"right"}}>50<br />/hour</p>
                </div>
              </div>
              
              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem"}}>John</p>

                <p style={{fontSize:"large"}}>0,1km</p>
              </div>

              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem", color: "yellow", fontWeight: "bold"}}>4/5</p>

                <p style={{fontSize:"large", color: "yellow", fontWeight: "bold"}}>47</p>
              </div>

              <p style={{marginTop: "-1rem", fontSize:"large", color: "green", fontWeight: "bold"}}>Last Booked 1 hour ago</p>

              <button className='booking-btn' onClick={makeBooking}>
                Make Booking
              </button>
              
            </div>
          </div>

          <div className='card'>
            <div className='sitter-image-div'>
              <svg className='sitter-image' width="100%" height="100%">
                <image href={josh} width="100%" height="100%" />
              </svg>
            </div>

            <div className='sitter-info'>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className='sitter-descr'>
                  <h4>Experienced local dog <br />and cat sitter</h4>
                </div>

                <div>
                  <p style={{fontSize:"larger", textAlign:"right"}}>50<br />/hour</p>
                </div>
              </div>
              
              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem"}}>Joshua</p>

                <p style={{fontSize:"large"}}>0,1km</p>
              </div>

              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem", color: "yellow", fontWeight: "bold"}}>4/5</p>

                <p style={{fontSize:"large", color: "yellow", fontWeight: "bold"}}>47</p>
              </div>

              <p style={{marginTop: "-1rem", fontSize:"large", color: "green", fontWeight: "bold"}}>Last Booked 1 hour ago</p>

              <button className='booking-btn' onClick={makeBooking}>
                Make Booking
              </button>
              
            </div>
          </div>

        </div>





        <div style={{display: "flex", flexDirection: "row"}}>
          <div className='card'>
            <div className='sitter-image-div'>
              <svg className='sitter-image' width="100%" height="100%">
                <image href={josh} width="100%" height="100%" />
              </svg>
            </div>

            <div className='sitter-info'>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className='sitter-descr'>
                  <h4>Experienced local dog <br />and cat sitter</h4>
                </div>

                <div>
                  <p style={{fontSize:"larger", textAlign:"right"}}>50<br />/hour</p>
                </div>
              </div>
              
              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem"}}>Joshua</p>

                <p style={{fontSize:"large"}}>0,1km</p>
              </div>

              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem", color: "yellow", fontWeight: "bold"}}>4/5</p>

                <p style={{fontSize:"large", color: "yellow", fontWeight: "bold"}}>47</p>
              </div>

              <p style={{marginTop: "-1rem", fontSize:"large", color: "green", fontWeight: "bold"}}>Last Booked 1 hour ago</p>

              <button className='booking-btn' onClick={makeBooking}>
                Make Booking
              </button>
              
            </div>
          </div>

          <div className='card'>
            <div className='sitter-image-div'>
              <svg className='sitter-image' width="100%" height="100%">
                <image href={john} width="100%" height="100%" />
              </svg>
            </div>

            <div className='sitter-info'>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className='sitter-descr'>
                  <h4>Experienced local dog <br />and cat sitter</h4>
                </div>

                <div>
                  <p style={{fontSize:"larger", textAlign:"right"}}>50<br />/hour</p>
                </div>
              </div>
              
              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem"}}>John</p>

                <p style={{fontSize:"large"}}>0,1km</p>
              </div>

              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem", color: "yellow", fontWeight: "bold"}}>4/5</p>

                <p style={{fontSize:"large", color: "yellow", fontWeight: "bold"}}>47</p>
              </div>

              <p style={{marginTop: "-1rem", fontSize:"large", color: "green", fontWeight: "bold"}}>Last Booked 1 hour ago</p>

              <button className='booking-btn' onClick={makeBooking}>
                Make Booking
              </button>
              
            </div>
          </div>

        </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home