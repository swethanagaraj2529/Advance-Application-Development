import React, { useState } from 'react';
import NavUser from './navuser';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/signup.css';
import loginImage from '../assets/women.jpg';
import Loginbar from './loginbar';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !username || !mobile || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Assuming account creation logic goes here
    console.log('Account created successfully!');
    navigate('/login'); // Navigate to login page
  };

  return (
    <>
    <Loginbar/>
      <div className="login-container signin">
        <img src={loginImage} alt="Login" className="signin-image" />
      </div>
      <div className="form-container signin">
        <h2 className="signin">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="signin">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="signin"
            />
          </div>
          <div className="signin">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="signin"
            />
          </div>
          <div className="signin">
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              className="signin"
            />
          </div>
          <div className="signin">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="signin"
            />
          </div>
          <div className="signin">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="signin"
            />
          </div>
          {error && <p className="error-message signin">{error}</p>}
          <Link to="/login"><button type="submit" className="signin">Sign Up</button></Link> 
        </form>
      </div>
    
    </>
  );
};

export default Signup;
