import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/navuser.css'; // Assuming you have a CSS file for styling
import logo from '../assets/yoga-academy-logo.jpg'; // Import your image

function Loginbar() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleHome = () => {
    navigate('/home'); // Navigate to "/home" page
  };

  const handleBookClass = () => {
    navigate('/booking'); // Navigate to "/booking" page
  };

  return (
    <nav className="navbar-simple"> {/* Add the classname "simple" here */}
     
      <img src={logo} alt="Corner Image" className="corner-image" />
    </nav>
  );
}

export default Loginbar;
