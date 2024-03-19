import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import {collection, getDocs, docs} from "firebase/firestore";
import {auth, db} from "../config/firebase";
import { getAuth } from 'firebase/auth';


import josh from "../assets/joshua-albatross.jpeg";
import john from "../assets/john-doe.jpg";

const Home = () => {

  const [petSitters, setPetSitters] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPetSitters();
  }, []);

  const getPetSitters = async() => {
    try {
      const querySnapShot = await getDocs(collection(db, "sitters"));
      //console.log("Query Snapshot:", querySnapShot.docs);
      const data = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPetSitters(data);
      console.log("petSitters Data: ", petSitters);
    } catch (error) {
      console.log("Error fetching Pet Sitters data", error.message);
    }
  }

  const makeBooking = (sitterId) => {
    const sitter = petSitters.find((sitter) => sitter.id === sitterId);
    console.log("selectedSitter: ", sitter)
    navigate("/makeAppointment", {state: sitter});
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
          {petSitters.map((sitter) => (
            <div className='card' key={sitter.id}>
            <div className='sitter-image-div'>
              <svg className='sitter-image' width="100%" height="100%">
                <image href={sitter.image} width="100%" height="100%" />
              </svg>
            </div>

            <div className='sitter-info'>
              <div style={{display: "flex", flexDirection: "row"}}>
                <div className='sitter-descr'>
                  <h4>Experienced local dog <br />and cat sitter</h4>
                </div>

                <div>
                  <p style={{fontSize:"larger", textAlign:"right"}}>{sitter.hourlyRate}<br />/hour</p>
                </div>
              </div>
              
              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem"}}>{sitter.name}</p>

                <p style={{fontSize:"large"}}>0,1km</p>
              </div>

              <div style={{display: "flex", flexDirection: "row", marginTop: "-1.5rem"}}>
                <p style={{fontSize:"large", marginRight: "5rem", color: "yellow", fontWeight: "bold"}}>{sitter.rate}/5</p>

                <p style={{fontSize:"large", color: "yellow", fontWeight: "bold"}}>47</p>
              </div>

              <p style={{marginTop: "-1rem", fontSize:"large", color: "green", fontWeight: "bold"}}>Last Booked 1 hour ago</p>

              <button className='booking-btn' onClick={() => makeBooking(sitter.id)}>
                Make Booking
              </button>
              
            </div>
          </div>
          ))}
          

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


        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home