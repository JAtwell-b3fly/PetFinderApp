import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {useNavigate, useLocation} from "react-router-dom";
import {collection, addDoc} from "firebase/firestore";
import { db } from '../config/firebase';

import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const AppointmentForm = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const sitter = state;
    console.log("sitter:", sitter);

    const [pets, setPets] = useState([{
        name: "",
        breed: "",
        specialRequest: "",
    }])

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [hours, setHours] = useState("");
    const [costing, setCosting] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [petSitter, setPetSitter] = useState(sitter)

    const handleHoursChange = (event) => {
        setHours(event.target.value);

        const hourlyRate = sitter ? sitter.hourlyRate: 0;
        setCosting(hourlyRate * parseInt(event.target.value || 0));
    }

    const addPet = () => {
        setPets([...pets, {
            name: "",
            breed: "",
            specialRequest: "",
        }])
    }

    const removePet = (index) => {
        if (pets.length > 1) {
            const updatedPets = [...pets];
            updatedPets.splice(index, 1);
            setPets(updatedPets);
        }
    }

    const handleInputChange = (index, field, value) => {
        const updatedPets = [...pets];
        updatedPets[index][field] = value;
        setPets(updatedPets);
    }

    const confirm = async(event) => {
        event.preventDefault();

        if (!date || !time || !hours || !clientName || !clientEmail || !clientPhone) {
            alert("Please fill in all required fields.");
            return; // Prevent submission if any required field is empty
        }

        try {
            const appointmentData = {
                petSitter: petSitter || "",
                pets: pets || [],
                date: date || "",
                time: time || "",
                hours: hours  || "",
                costing: costing || "",
                clientName: clientName || "",
                clientEmail: clientEmail || "",
                clientPhone: clientPhone || "",
            };

            console.log("Appointments Data: ", appointmentData);

            const docRef = collection(db, "appointments");
            await addDoc(docRef, {
                appointmentData,
            });

            alert("Appointment booked for ${date} at ${time} for ${hours} hours.");
            navigate("/appointments");

        } catch (error) {
            console.error("Error in adding appointment to Firestore", error.message);
            alert("An error occurred. Please try again.");
        }
    }

    const cancel = () => {
        setPets(null);
        setDate("");
        setTime("");
        setHours("");
        setClientName("");
        setClientEmail("");
        setClientPhone("");
    }

  return (
    <div>
        <NavBar />

        <div style={{overflowY: "auto", maxHeight: "32rem"}}>
            <h1 style={{textAlign: "center", marginBottom: "2rem"}}>Make an Appointment</h1>

            {sitter && (
            <div className='appointment-pet-sitter'>
                
                <svg className="appointment-image" width="100%" height="100%">
                    <image href={sitter.image} width="100%" height="100%" />
                </svg>

                <h1 style={{textAlign: "center", fontSize: "x-large", marginBottom: "2rem"}}>{sitter.name}</h1>

                <div className='pet-sitter-bio-box'>
                    <div className='pet-sitter-about'>

                        <div style={{display: "flex"}}>
                            <h1>R {sitter.hourlyRate}</h1><p className='pet-sitter-text' style={{marginTop: "2rem"}}>/per hour</p>

                            <h1 style={{marginRight: "5rem", color: "yellow", fontWeight: "bold", marginLeft: "20rem"}}>{sitter.rating}/5</h1>

                            <p className='pet-sitter-text' style={{marginTop: "1.7rem", marginLeft: "-4rem", fontSize: "x-large"}}>Rating</p>
                        </div>

                        <div>
                            <p className='pet-sitter-text'>1km Distance Away</p>
                            
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <p className='pet-sitter-text' style={{fontWeight: "bold"}}>{sitter.availableDate}</p>
                                <p className='pet-sitter-text' style={{fontWeight: "bold"}}>{sitter.availableTime}</p>
                            </div>
                            
                            <div style={{fontWeight: "normal"}}>
                               <p className='pet-sitter-text'>Services:</p>
                                <ul>
                                    {sitter.services && sitter.services.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                            
                        </div>
                    </div>

                    <div className='pet-sitter-experience'>

                        <div>
                            <p className='pet-sitter-text'  style={{fontWeight: "bold", fontSize: "xx-large"}}>{sitter.experience}</p>
                            <p className='pet-sitter-text'>{sitter.description}</p>
                            <p className='pet-sitter-text'>{sitter.education}</p>
                            <p className='pet-sitter-text'>{sitter.aspirations}</p>
                            
                            <p className='pet-sitter-text' style={{fontWeight: "bold"}}>{sitter.email}</p>
                            <p className='pet-sitter-text' style={{fontWeight: "bold"}}>{sitter.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}

            <form className='appointment-box'>
                <div style={{display: "flex", padding: "3rem 3rem 3rem 1rem", marginLeft: "5rem"}}>
                <div style={{marginRight: "2rem"}}>
                    <h2>Selected Pets</h2>

                    <div style={{maxHeight: "23rem", overflowY: "auto"}}>
                        {pets.map((pet, index) => (
                        <div style={{marginBottom: "2rem"}} key={index}>
                            <div className='appointment-specified-pets'>
                                <label className='appointment-label'>Pet Name</label>
                                <input className='appointment-input' type="text" placeholder='Fluffly' value={pet.name} onChange={(event) => handleInputChange(index, "name", event.target.value)} />

                                <label className='appointment-label'>Pet Breed</label>
                                <input className='appointment-input' type="text" placeholder='Golden Retriever' value={pet.breed} onChange={(event) => handleInputChange(index, "breed", event.target.value)} />

                                <label className='appointment-label'>Special Request</label>
                                <input className='appointment-input' style={{height: "5rem"}} type="text" placeholder='Administer anxiety medication' value={pet.specialRequest} onChange={(event) => handleInputChange(index, "specialRequest", event.target.value)} />
                            </div>

                            <div style={{marginLeft: "5rem", display: "flex", justifyContent: "flex-end", width: "16rem"}}>
                                {index === pets.length -1 && (
                                    <button style={{border: "none", backgroundColor: "unset"}} onClick={addPet}>
                                        <IoIosAddCircle size={25} style={{color: "black"}} />
                                    </button>
                                )}
                                
                                {pets.length > 1 && (
                                    <button  style={{border: "none", backgroundColor: "unset"}} onClick={() => removePet(index)}>
                                        <MdDeleteForever size={25} style={{color: "black"}} />
                                    </button>
                                )}
                            </div>

                            <hr style={{width: "70%", backgroundColor: "black", height: "0.1rem", borderRadius: "1rem", marginLeft: "1rem", marginTop: "1rem"}} />
                        </div>
                        ))}
                        
                    </div>
                    

                </div>

                <div style={{marginRight: "2rem"}}>
                    <h2>Date and Time</h2>
                    <div className='appointment-date-time'>
                        <label className='appointment-label'>Date</label>
                        <input className='appointment-input' type="date" placeholder='yyyy/mm/dd' value={date} onChange={(event) => setDate(event.target.value)} />

                        <label className='appointment-label'>Start Time</label>
                        <input className='appointment-input' type="text" placeholder='07:00' value={time} onChange={(event) => setTime(event.target.value)} />

                        <label className='appointment-label'>Duration</label>
                        <input className='appointment-input' type="number" placeholder='1 hour' value={hours} onChange={handleHoursChange}  />

                        <label className='appointment-label'>Estimated Costing</label>
                        <input className='appointment-input' type="number" placeholder='R 50' readOnly value={costing} />
                    </div>
                </div>

                <div>
                    <h2>Contact Information</h2>
                    <div className='appointment-contact-info'>
                        <label className='appointment-label'>Client Full Name</label>
                        <input className='appointment-input' type="text" placeholder='Jasmin Strauss' value={clientName} onChange={(event) => setClientName(event.target.value)} />

                        <label className='appointment-label'>Client Email Address</label>
                        <input className='appointment-input' type="email" placeholder='example@gmail.com' value={clientEmail} onChange={(event) => setClientEmail(event.target.value)} />

                        <label className='appointment-label'>Contact Number</label>
                        <input className='appointment-input' type="tel" placeholder='084 365 9482' value={clientPhone} onChange={(event) => setClientPhone(event.target.value)} />

                    </div>
                </div>

                </div>

                <div style={{justifyContent: "space-evenly", marginTop: "1rem", display: "flex", flexDirection: "row", marginBottom: "2rem"}}>
                    <button className='confirm-btn' onClick={confirm}>
                        Confirm
                    </button>

                    <button className='cancel-btn' onClick={cancel}>
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