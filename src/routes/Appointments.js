import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import {useNavigate} from "react-router-dom";


const Appointments = () => {

  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [status, setStatus] = useState("upcoming");

  useEffect(() => {
    getAppointments();
  }, [])

  const getAppointments = async() => {
    try {
      const querySnapShot = await getDocs(collection(db, "appointments"));
    
      const data = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointments(data);
      console.log("Appointments: ", appointments)
    } catch (error) {
      console.error("Error in fetching appointments from firebase:", error.message);
    }
  }

  const currentDate = new Date();

  const upcomingAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);
    return appointmentDate > currentDate;
  })

  const scheduledAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);
    return appointmentDate.toDateString() === currentDate.toDateString();
  })

  const pastAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);
    return appointmentDate < currentDate;
  })

  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchQuery = (event) => {
      setSearchTerm(event.target.value);
  }

  const filteredAppointments = appointments.filter((appointment) => {
    return appointment.appointmentData.petSitter.name.toLowerCase().includes(searchTerm.toLowerCase());
  })

  const [expandedId, setExpandedId] = useState(null);
  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null: id));
  }


  return (
    <div>
      <NavBar />

      <div style={{overflowY: "auto", maxHeight: "32rem", overflowX: "unset"}}>
        <h1 style={{textAlign: "center", marginBottom: "1.5rem"}}>Appointments</h1>

        <div style={{display: "flex", justifyContent: "space-between", padding: "2rem"}}>
          <div className='appointment-toggle'>
            <button className={status === "upcoming" ? "selected-app-btn" : "unselected-app-btn" } onClick={() => setStatus("upcoming")}>
              Upcoming
            </button>

            <p className='pet-sitter-text' style={{color: "white", marginLeft: "0.5rem", marginRight: "0.5rem"}}>|</p>

            <button className={status === "scheduled" ? "selected-app-btn" : "unselected-app-btn"} onClick={() => setStatus("scheduled")}>
              Scheduled
            </button>

            <p className='pet-sitter-text' style={{color: "white", marginLeft: "0.5rem", marginRight: "0.5rem"}}>|</p>

            <button className={status === "past" ? "selected-app-btn" : "unselected-app-btn"} onClick={() => setStatus("past")}>
              Past
            </button>
          </div>

          <div style={{marginTop: "-1rem"}}>
            <input placeholder="Search by pet sitter..." type="text" className="searchbar" value={searchTerm} onChange={handleSearchQuery} />
          </div>
        </div>

        <div className='table-box'>
          <table className='borderless-table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Pet Sitter</th>
                <th>Service</th>
                <th>.</th>
              </tr>
            </thead>
            
            <tbody>
              {!filteredAppointments.length > 0 && upcomingAppointments.map((data) => (
                <React.Fragment key={data.id}>
                <tr>
                <td>{data.appointmentData.date}</td>
                <td>{data.appointmentData.time}</td>
                <td>{data.appointmentData.petSitter.name}</td>
                <td  style={{display: "flex", flexDirection: "row", width: "50%", height: "auto"}}>{data.appointmentData.petSitter.services.map((service, index) => (
                  <ul>
                    <li key={index}>{service}, </li>
                  </ul>
                ))}</td>
                <td>
                  <button style={{backgroundColor: "unset", border: "none"}} onClick={() => toggleExpand(data.id)}>
                    Expand  
                  </button>
                </td>
              </tr>
                
              {expandedId === data.id && (
              <tr>
                <td colSpan="4">
                  <div>
                    <p>Additional Details: </p>
                    <ul>
                      <li>Duration: {data.appointmentData.hours}</li>
                      <li>Cost: {data.appointmentData.costing}</li>
                    </ul>
                    <li>Client Name: {data.appointmentData.clientName}</li>
                  </div>
                </td>
              </tr>
              )}
              </React.Fragment>
              ))}

              {!filteredAppointments.length > 0 && scheduledAppointments.map((data) => (
                <React.Fragment key={data.id}>
                <tr>
                <td>{data.appointmentData.date}</td>
                <td>{data.appointmentData.time}</td>
                <td>{data.appointmentData.petSitter.name}</td>
                <td  style={{display: "flex", flexDirection: "row", width: "50%", height: "auto"}}>{data.appointmentData.petSitter.services.map((service, index) => (
                  <ul>
                    <li key={index}>{service}, </li>
                  </ul>
                ))}</td>
                <td>
                  <button style={{backgroundColor: "unset", border: "none"}} onClick={() => toggleExpand(data.id)}>
                    Expand  
                  </button>
                </td>
              </tr>
                
              {expandedId === data.id && (
              <tr>
                <td colSpan="4">
                  <div>
                    <p>Additional Details: </p>
                    <ul>
                      <li>Duration: {data.appointmentData.hours}</li>
                      <li>Cost: {data.appointmentData.costing}</li>
                    </ul>
                    <li>Client Name: {data.appointmentData.clientName}</li>
                  </div>
                </td>
              </tr>
              )}
              </React.Fragment>
              ))}

              {filteredAppointments.map((data) => (
                <React.Fragment key={data.id}>
                <tr>
                <td>{data.appointmentData.date}</td>
                <td>{data.appointmentData.time}</td>
                <td>{data.appointmentData.petSitter.name}</td>
                <td  style={{display: "flex", flexDirection: "row", width: "50%", height: "auto"}}>{data.appointmentData.petSitter.services.map((service, index) => (
                  <ul>
                    <li key={index}>{service}, </li>
                  </ul>
                ))}</td>
                <td>
                  <button style={{backgroundColor: "unset", border: "none"}} onClick={() => toggleExpand(data.id)}>
                    Expand  
                  </button>
                </td>
              </tr>
                
              {expandedId === data.id && (
              <tr>
                <td colSpan="4">
                  <div>
                    <p>Additional Details: </p>
                    <ul>
                      <li>Duration: {data.appointmentData.hours}</li>
                      <li>Cost: {data.appointmentData.costing}</li>
                    </ul>
                    <li>Client Name: {data.appointmentData.clientName}</li>
                  </div>
                </td>
              </tr>
              )}
              </React.Fragment>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
    
  )
}

export default Appointments