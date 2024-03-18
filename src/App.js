import React from "react";
import {Routes, Route} from "react-router-dom";

import About from "./routes/About";
import Appointments from "./routes/Appointments";
import Chat from "./routes/Chat";
import Home from "./routes/Home";
import SignUpIn from "./routes/SignUpIn";
import Profile from "./routes/Profile";
import AppointmentForm from "./routes/AppointmentForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/makeAppointment" element={<AppointmentForm />} />
    </Routes>
  );
}

export default App;
