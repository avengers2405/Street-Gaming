import React, { useState, useEffect } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Head from "../Components/Head";
import { AiOutlineLock, AiOutlineCustomerService } from 'react-icons/ai';
import "./LoginPhone.css";
import { Link } from 'react-router-dom';


export default function LoginPhone() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  // const navigate = useNavigate(); 

  useEffect(() => {
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Remember Password:", rememberPassword);
  }, [phoneNumber, password, rememberPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  const handleEmailLoginClick = () => {
    // navigate('/email'); 
  };

  return (
    <div className="main-container">
      
      <div className="b2">
        <div className="box2">
          
          <div className="phone">
            <div className="photo">
              <FaMobileAlt />
            </div>
           
            <p>Log in with phone</p>
            
            <hr />
          </div>
          <Link to='/n'>
          <div className="email" >
            <div className="photo">
              <AiOutlineMail />
            </div>
            <p>Email Login</p>
            <hr />
          </div>
          </Link>
        </div>

        <form className="f2" onSubmit={handleSubmit}>
          <div className="num">
            <div className="ic"><FaMobileAlt /></div>
            <p className="num-para">Phone number</p>
          </div>
          
          <input
            className="email-input"
            type="number"
            placeholder="Please enter the phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <div className="num">
            <div className="ic"><AiOutlineLock /></div>
            <p className="num-para">Password</p>
          </div>
          
          <input
            className="email-input"
            type="password"
            placeholder="Please enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="num">
            <input
              className="check"
              type="checkbox"
              checked={rememberPassword}
              onChange={(e) => setRememberPassword(e.target.checked)}
            />
            <p className="num-para">Remember password</p>
          </div>

          <button className="btn1" type="submit">LOG IN</button>

          <button className="btn1">REGISTER</button>

          <div className="icns">
            <div>
              <div className="ic2"><AiOutlineLock /></div>
              <p>Forget password</p>
            </div>
             <div>
              <div className="ic2"><AiOutlineCustomerService /></div>
              <p>Customer Service</p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
