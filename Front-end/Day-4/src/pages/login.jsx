import React, { useState } from 'react';
import '../CSS/login.css';
import loginImage from '../assets/women.jpg'; // Assuming this is the image path
import { useNavigate } from 'react-router-dom';
import Loginbar from './loginbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home');
  };

  return (
    <>
       <Loginbar/>
   
    <div className="login-container">
      <img src={loginImage} alt="Login Background" className="login-image" />
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group-1">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="password-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
