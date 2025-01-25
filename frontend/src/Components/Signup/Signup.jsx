import React, { useState } from "react";
import './Signup.css'
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/img.png'
import toast from 'react-hot-toast'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


function Signup(){

  const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    const copySignupInfo= { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }
  // console.log("Signup", signupInfo)



  const handleSignup = async (e) => {
    e.preventDefault()
    const { name, email, password } = signupInfo;
    if ( !name || !email || !password) {
      return toast.error('name, email and password are required')
    }
    try {
      const url = "https://ritesh7397-mern-stack-login-signup-1.onrender.com/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
          toast.success(message);
          setTimeout(() => {
            navigate('/login')
          }, 2000)
        } 
      else if (error) {
          const details = error?.details[0].message;
          toast.error(details);
        } 
        else if (!success) {
          toast.error(message);
        }
      console.log(result);
    } 
    catch (err) {
      toast.error(err);
    }
  }

  return (
   <>
   <Navbar/>
    
    <div className="signup-container">
      <div className="image-section">
        <img src={img} alt="no" />
      </div>
      <div className="form-section">
        <h1>Signup</h1>
        <p>Fill in your credentials and click on the Signup button</p>
        
        <form onSubmit={handleSignup}>

        <div className="input-box">
            <label htmlFor="username">User name</label>
            <input
              onChange={handleChange}
              type="text"
              name='name'
              placeholder="Enter Your Name"
              value={signupInfo.name}

            />
          </div>

          <div className="input-box">
            <label htmlFor="username">Email </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={signupInfo.email}
            />
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={signupInfo.password}
            />
          </div>

          <button type="submit" className="submit-button">
            Signup
          </button>
        </form>

        <div className="additional-links">
          {/* <a href="/forgot-password">Forgot Password?</a> */}
          <p>
          Already have an account? 
           <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Signup;
