import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Trips from './components/Trips';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import NewTripForm from './components/NewTripForm';
import TripDetail from './components/TripDetail';
import UpdateTripForm from './components/UpdateTripForm';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/allTrips" element={<Trips />} />
          <Route path="/UserRegistration" element={<UserRegistration />} /> 
          <Route path="/UserLogin" element={<UserLogin/>} /> 
          <Route path="/NewTripForm" element={<NewTripForm/>} /> 
          <Route path="/tripDetails/:id" element={<TripDetail/>} /> 
          <Route path="/tripUpdate/:id" element={<UpdateTripForm/>} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App