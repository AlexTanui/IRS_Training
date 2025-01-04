import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const FormBox = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggleForm = (signupMode) => {
    setIsSignup(signupMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignup ? 'http://localhost:5000/signup' : 'http://localhost:5000/login';

    try {
      const response = await axios.post(url, formData);

      if (isSignup) {
        alert('Signup successful');
        toggleForm(false); // Switch to login form after signup
      } else {
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful');
        setIsLoggedIn(true); // Set login state
        navigate('/training'); // Redirect to the training page
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome to the platform!</p>
      ) : (
        <div id="Login" className={`form-box ${isSignup ? 'signup' : 'login'}`}>
          {isSignup ? (
            <div>
              <div className="form-details">
                <h2>Create Account</h2>
                <p>Sign up with your details below.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <input className='input-field'
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                  placeholder="First Name"
                />
                <input className='input-field'
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                  placeholder="Last Name"
                />
                <input className='input-field'
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required
                  placeholder="Phone Number"
                />
                <input className='input-field'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                />
                <input className='input-field'
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Password"
                />
                <button type="submit">Sign Up</button>
              </form>
              <p>
                Already have an account?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(false); }}>Login</a>
              </p>
            </div>
          ) : (
            <div>
              <div className="form-details">
                <h2>Welcome Back</h2>
                <p>Log in with your credentials.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <input className='input-field'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                />
                <input className='input-field'
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Password"
                />
                <button type="submit">Log In</button>
              </form>
              <p>
                Don't have an account?{' '}
                <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(true); }}>Sign Up</a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FormBox;
