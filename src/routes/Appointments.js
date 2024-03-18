import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Appointments = () => {
  return (
    <div>
      <NavBar />

      <div style={{overflowY: "auto", maxHeight: "32rem", overflowX: "unset"}}>
        <h1 style={{textAlign: "center", marginBottom: "1.5rem"}}>Appointments</h1>

        <div style={{display: "flex", justifyContent: "space-between", padding: "2rem"}}>
          <div className='appointment-toggle'>
            <button className='unselected-app-btn'>
              Upcoming
            </button>

            <p className='pet-sitter-text' style={{color: "white", marginLeft: "0.5rem", marginRight: "0.5rem"}}>|</p>

            <button className='selected-app-btn'>
              Scheduled
            </button>

            <p className='pet-sitter-text' style={{color: "white", marginLeft: "0.5rem", marginRight: "0.5rem"}}>|</p>

            <button className='unselected-app-btn'>
              Past
            </button>
          </div>

          <div style={{marginTop: "-1rem"}}>
            <input placeholder="Search by pet sitter..." type="text" className="searchbar" />
          </div>
        </div>

        <div className='table-box'>
          <table className='borderless-table'>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Pet Sitter</th>
              <th>Service</th>
              <th>.</th>
            </tr>

            <tr>
              <td>15 Jan 2024</td>
              <td>07:00</td>
              <td>Joshua Albatross</td>
              <td>Pet Sitting</td>
              <td>Expand</td>
            </tr>

            <tr>
              <td>15 Jan 2024</td>
              <td>07:00</td>
              <td>Joshua Albatross</td>
              <td>Pet Sitting</td>
              <td>Expand</td>
            </tr>
          </table>
        </div>
      </div>

      <Footer />
    </div>
    
  )
}

export default Appointments