import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/img.png'
import toast from 'react-hot-toast'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


function LoginPage (){

  const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    const copyLoginInfo= { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  }
  // console.log("Signup", signupInfo)



  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = loginInfo;
    if ( !email || !password) {
      return toast.error('email and password are required')
    }
    try {
      const url = "https://ritesh7397-mern-stack-login-signup-1.onrender.com/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });
      
      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;
      if (success) {
          toast.success(message);
          localStorage.setItem('token', jwtToken);
          localStorage.setItem('loggedInUser', name);
          setTimeout(() => {
            navigate('/home')
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
    <div className="login-container">
      <div className="image-container">
        <img src={img} alt="no" />
      </div>
      <div className="form-container">
        <h1>Login</h1>
        <p>Fill in your credentials and click on the Login button</p>
        
        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label htmlFor="username">User name</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Your Email Address"
              value={loginInfo.email}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={loginInfo.password}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <div className="extra-links">
          {/* <a href="/forgot-password">Forgot Password?</a> */}
          <p>
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginPage;
