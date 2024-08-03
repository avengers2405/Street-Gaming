import React, { useState, useEffect } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Head from "../Components/Head.js";
import { AiOutlineLock, AiOutlineCustomerService } from 'react-icons/ai';
import "./LoginEmail.css";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

export default function LoginEmail() {
  const nevigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  useEffect(() => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Password:", rememberPassword);
  }, [email, password, rememberPassword]);
  // const navigate = useNavigate();


  
  const getOtp = (e)=>{
    e.preventDefault();
    const phoneNumber = email;
    if(phoneNumber)
    {
      
        
      axios.post("/otp/getotp",{phone:phoneNumber})
    .then(resp =>{
      console.log(resp);
      if(resp.status ==200)
      {
        alert('OTP sent successfully');

      }
      else
      {
        

          alert(resp.message);
      }
    })
    .catch(e=>{
     
      alert(e.response.data.message);
      
    });
    }
    else alert("Please  enter phone number ");
  }
  const handlePhoneLoginClick = (event) => {
    event.preventDefault();
    const otp  = password;
  
    const phoneNumber = email;
    axios.post("/user/login",{phone:phoneNumber,otp:otp})
    .then(resp =>{
      console.log(resp);
      if(resp.status ==200)
      {
        alert('Login successfull!');
        nevigate('/home');
        

      }
      else
      {
          alert(resp.message);
      }
    })
    .catch(e=>{
      console.log(e);
      alert(e.response.data.message);
    });
  };

  return (
    <div className="main-container">
     
      <div className="b">
        {/* <div className="box2">
          <div className="phone" >
            <div className="photo">
              <FaMobileAlt />
            </div>
           
            <p>Log in with phone</p>
           
            <hr />
          </div>
          <div className="email">
            <div className="photo">
              <AiOutlineMail />
            </div>
            <p>Email Login</p>
            <hr />
          </div>
        </div> */}

        <form className="f1" onSubmit={ handlePhoneLoginClick}>
          <div className="num">
            <div className="ic"><AiOutlineMail /></div>
            <p className="num-para">Phone</p>
          </div>
          
          <input
            className="email-input"
            type="text"
            placeholder="Please enter the Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <button className="btn1" type="button" onClick={getOtp} >OTP</button>

          <div className="num">
            <div className="ic"><AiOutlineLock /></div>
            <p className="num-para">OTP</p>
          </div>
          
          <input
            className="email-input"
            type="password"
            placeholder="Please enter OTP"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      

      

          <button className="btn1" type="submit">LOG IN</button>

        

          {/* <div className="icns">
            
             <div>
              <div className="ic1"><AiOutlineCustomerService /></div>
              <p>Customer Service</p>
            </div>
          </div> */}

        </form>
      </div>
    </div>
  );
}
