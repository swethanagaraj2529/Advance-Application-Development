import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/navuser.css'; // Assuming you have a CSS file for styling
import logo from '../assets/logo.png'; // Import your image

function NavUser() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleHome = () => {
    navigate('/home'); // Navigate to "/home" page
  };

  const handleBookClass = () => {
    navigate('/booking'); // Navigate to "/booking" page
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a onClick={handleHome}>Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a onClick={handleBookClass}>Book a class</a></li> {/* Use onClick to trigger handleBookClass */}
        {/* Add more links as needed */}
      </ul>
      <img src={logo} alt="Corner Image" className="corner-image" />
    </nav>
  );
}

export default NavUser;
