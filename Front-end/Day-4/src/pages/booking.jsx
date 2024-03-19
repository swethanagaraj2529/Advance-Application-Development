import NavUser from './navuser';
import Bookingimage from '../assets/bookingimage.jpg';
import '../CSS/booking.css';
import  { useState } from 'react';

import Footer from'./footer';

function Booking() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address:'',
    email: '',
    password: '',
    yogaCenter: '' // New state for yoga center selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <div>
      <img src={Bookingimage} className="bookingimage" alt="bookingimage" />
      <div className="bookingoverlay"></div>
      <NavUser />
      <p className='yogastudio'>Yoga Studio</p>
      <div className='containerpara'>
        <div className='conatain'>
          <p className='parabooking'>Here at Zin, we believe in balance. We believe in accessibility.
            We believe in meeting each and every member of our tribe where they are on any given day.
            And it’s because of these beliefs that we have created a schedule with a wide range of offerings with gifted and passionate teachers.

            If you have any questions at all or would like
            some help figuring out what would best serve you,
            don’t hesitate to reach out to Kara (our owner).
            You can also view our pricing and acquaint yourself with our team.

            Here you will find our weekly schedule (including
            special classes) and our upcoming events (series, non-CEU offerings, retreats, etc.)
            To learn more about our Yoga Alliance certified 200hr Yoga Teacher Training Program and the other CEU workshops </p>
        </div>
      </div>
      <div className='registration-form'>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="Address" id="Address" name="Address" value={formData.Address} onChange={handleChange} required />
          </div>
        
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
          <label htmlFor="phone no:">phone no:</label>
            <input type="text" id="phoneno" name="phoneno" value={formData.phoneno} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="yogaCenter">Yoga Center:</label>
            <select id="yogaCenter" name="yogaCenter" value={formData.yogaCenter} onChange={handleChange} required>
              <option value="">Select a Yoga Center</option>
              <option value="Center 1">12:00 PM – 12:45 PM EDT
Yoga Qi Gong Fusion</option>
              <option value="Center 2">5:30 PM – 6:15 PM EDT
Barre Express</option>
              <option value="Center 3">6:30 PM – 7:30 PM EDT
Myofascia Release and Deep Stretch</option>
<option value="center 4">10:30 AM – 11:30 AM EDT
Gentle Flow</option>
<option value="canter 5">7:00 PM – 8:00 PM EDT
Flow Yoga</option>
<option value="canter 6">  7:00 AM - 7:45 AM EDT
TRX</option>

              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
     <Footer/>
    </div>
  );
}

export default Booking;