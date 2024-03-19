import React from 'react';
import '../CSS/academy.css'; // Import the CSS file for styling
import Loginbar from './loginbar';
import NavUser from './navuser';
import image from '../assets/bookingimage.jpg';

// Import the image


function YogaAcademy({ name, location, price, duration, className }) {
  return (
    <div className={`academy-box ${className}`}>
      <img src={image} alt={name} className="academy-image" />
      <h2>{name}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Duration:</strong> {duration}</p>
    </div>
  );
}

function Academy() {
  return (
    <>
    <Loginbar/>
    <div className="academy-page">
      <h1>Yoga Academies</h1>
      <div className="academy-container">
        <YogaAcademy
          name="Maharishi Yoga Peeth"
          location="Rishikesh & Bali"
          price="$999"
          duration="7 days"
         
          // Pass the imported image
        />
     
        
       
      </div>
      
    </div>
    </>
  );
}

export default Academy;
