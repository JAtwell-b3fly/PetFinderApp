import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

import josh from "../assets/joshua-albatross.jpeg";

const AppointmentForm = () => {
  return (
    <div>
        <NavBar />

        <div style={{overflowY: "auto", maxHeight: "32rem"}}>
            <h1 style={{textAlign: "center", marginBottom: "2rem"}}>Make an Appointment</h1>

            <div className='appointment-pet-sitter'>
                <svg className="appointment-image" width="100%" height="100%">
                    <image href={josh} width="100%" height="100%" />
                </svg>

                <h1 style={{textAlign: "center", fontSize: "x-large", marginBottom: "2rem"}}>Joshua Albatross</h1>

                <div className='pet-sitter-bio-box'>
                    <div className='pet-sitter-about'>

                        <div style={{display: "flex"}}>
                            <h1>R50</h1><p className='pet-sitter-text' style={{marginTop: "2rem"}}>/per hour</p>

                            <h1 style={{marginRight: "5rem", color: "yellow", fontWeight: "bold", marginLeft: "20rem"}}>4/5</h1>

                            <p className='pet-sitter-text' style={{marginTop: "1.7rem", marginLeft: "-4rem", fontSize: "x-large"}}>Rating</p>
                        </div>

                        <div>
                            <p className='pet-sitter-text'>1km Distance Away</p>
                            
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <p className='pet-sitter-text' style={{fontWeight: "bold"}}>Available 5 days a week</p>
                                <p className='pet-sitter-text' style={{fontWeight: "bold"}}>07:00am - 18:00pm</p>
                            </div>
                            
                            <p className='pet-sitter-text' style={{fontWeight: "normal"}}>
                                Services:
                                <ul>
                                    <li>Pet Sitting</li>
                                    <li>Dog Walking</li>
                                    <li>Administering Medication</li>
                                    <li>Grooming</li>
                                    <li>Taking Baths</li>
                                </ul>
                            </p>
                            
                        </div>
                    </div>

                    <div className='pet-sitter-experience'>

                        <div>
                            <p className='pet-sitter-text'  style={{fontWeight: "bold", fontSize: "xx-large"}}>2 years of pet sitting experience</p>
                            <p className='pet-sitter-text'>I am reliable and I pay great attention to detail</p>
                            <p className='pet-sitter-text'>High School Graduate</p>
                            <p className='pet-sitter-text'>Aspiring Health and Safety Officer</p>
                            
                            <p className='pet-sitter-text' style={{fontWeight: "bold"}}>joshuaalbatross25@gmail.com</p>
                            <p className='pet-sitter-text' style={{fontWeight: "bold"}}>073 453 9462</p>
                        </div>
                    </div>
                </div>
            </div>

            <form className='appointment-box'>
                <div style={{display: "flex", padding: "3rem 3rem 3rem 1rem", marginLeft: "5rem"}}>
                <div style={{marginRight: "2rem"}}>
                    <h2>Selected Pets</h2>

                    <div style={{maxHeight: "23rem", overflowY: "auto"}}>
                        <div style={{marginBottom: "2rem"}}>
                            <div className='appointment-specified-pets'>
                                <label className='appointment-label'>Pet Name</label>
                                <input className='appointment-input' type="text" placeholder='Fluffly' />

                                <label className='appointment-label'>Pet Breed</label>
                                <input className='appointment-input' type="text" placeholder='Golden Retriever' />

                                <label className='appointment-label'>Special Request</label>
                                <input className='appointment-input' style={{height: "5rem"}} type="text" placeholder='Administer anxiety medication' />
                            </div>

                            <div style={{marginLeft: "5rem", display: "flex", justifyContent: "flex-end", width: "16rem"}}>
                                <button style={{border: "none", backgroundColor: "unset"}}>
                                    <IoIosAddCircle size={25} style={{color: "black"}} />
                                </button>

                                <button  style={{border: "none", backgroundColor: "unset"}}>
                                    <MdDeleteForever size={25} style={{color: "black"}} />
                                </button>
                            </div>

                            <hr style={{width: "70%", backgroundColor: "black", height: "0.1rem", borderRadius: "1rem", marginLeft: "1rem", marginTop: "1rem"}} />
                        </div>

                        <div className='appointment-specified-pets'>
                            <label className='appointment-label'>Pet Name</label>
                            <input className='appointment-input' type="text" placeholder='Fluffly' />

                            <label className='appointment-label'>Pet Breed</label>
                            <input className='appointment-input' type="text" placeholder='Golden Retriever' />

                            <label className='appointment-label'>Special Request</label>
                            <input className='appointment-input' style={{height: "5rem"}} type="text" placeholder='Administer anxiety medication' />
                        </div>

                        <div style={{marginLeft: "5rem", display: "flex", justifyContent: "flex-end", width: "16rem"}}>
                            <button style={{border: "none", backgroundColor: "unset"}}>
                                <IoIosAddCircle size={25} style={{color: "black"}} />
                            </button>

                            <button  style={{border: "none", backgroundColor: "unset"}}>
                                <MdDeleteForever size={25} style={{color: "black"}} />
                            </button>
                        </div>
                    </div>

                </div>

                <div style={{marginRight: "2rem"}}>
                    <h2>Date and Time</h2>
                    <div className='appointment-date-time'>
                        <label className='appointment-label'>Date</label>
                        <input className='appointment-input' type="date" placeholder='yyyy/mm/dd' />

                        <label className='appointment-label'>Start Time</label>
                        <input className='appointment-input' type="text" placeholder='07:00' />

                        <label className='appointment-label'>Duration</label>
                        <input className='appointment-input' type="number" placeholder='1 hour'  />

                        <label className='appointment-label'>Estimated Costing</label>
                        <input className='appointment-input' type="number" placeholder='R 50' readOnly />
                    </div>
                </div>

                <div>
                    <h2>Contact Information</h2>
                    <div className='appointment-contact-info'>
                        <label className='appointment-label'>Client Full Name</label>
                        <input className='appointment-input' type="text" placeholder='Jasmin Strauss' />

                        <label className='appointment-label'>Client Email Address</label>
                        <input className='appointment-input' type="email" placeholder='example@gmail.com' />

                        <label className='appointment-label'>Contact Number</label>
                        <input className='appointment-input' type="tel" placeholder='084 365 9482' />

                    </div>
                </div>

                </div>

                <div style={{justifyContent: "space-evenly", marginTop: "1rem", display: "flex", flexDirection: "row", marginBottom: "2rem"}}>
                    <button className='confirm-btn'>
                        Confirm
                    </button>

                    <button className='cancel-btn'>
                        Cancel
                    </button>
                </div>
                
            </form>
        </div>

        <Footer />
    </div>
   
  )
}

export default AppointmentForm