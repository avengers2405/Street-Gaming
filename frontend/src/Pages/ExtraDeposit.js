import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./ExtraDeposit.css";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
Modal.setAppElement("#root"); // Set the root element for accessibility

function ExtraDepositModal({ isOpen, onClose }) {

  
  const nevigate = useNavigate();
  const [user,setUser] = useState({});
  useEffect(() => {

      axios.get("/user/getuser")
      .then((res)=>{
          
        const data = res.data;
       setUser(data);
      })
      .catch(e =>{
        alert("Please Login first");
       nevigate('/login');
      })
   
     }, []);



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modalcontent"
      
    >
      
      <div className="box3" style={{backgroundColor:'white',height:'73vh',justifyContent:'center',marginTop:'90px'}}>
        <div className="head2">
          <h3 className="head2-text">Extra first deposit bonus</h3>
          <p className="head2-p">Each account can only receive award once</p>
        </div>

        <div className="container-cards">
          {/* Placeholder for card content */}
          <div className="card2">
            <div className="card2-div1">
              <p>
                first deposit<span style={{ color: "rgb(251, 60, 60)" }}>2000</span>
              </p>
              <p style={{ color: "orange" }}>+ $188.0</p>
            </div>
            <p className="card2-p">
              Deposit 2000 for the first time in your account and you can receive 188
            </p>
            <div className="card2-div1">
              <p className="card2-div1-p">0/2000</p>
              <Link to='/deposite'>
              <button className="card2-div1-btn">Deposit</button></Link>
            </div>
          </div>
          <div className="card2">
            <div className="card2-div1">
              <p>
                first deposit<span style={{ color: "rgb(251, 60, 60)" }}>240000</span>
              </p>
              <p style={{ color: "orange" }}>+ $2533.0</p>
            </div>
            <p className="card2-p">
              Deposit 240000 for the first time in your account and you can receive 2533
            </p>
            <div className="card2-div1">
              <p className="card2-div1-p">0/2000</p>
              <Link to='/deposite'>
              <button className="card2-div1-btn">Deposit</button></Link>
            </div>
          </div>
          <div className="card2">
            <div className="card2-div1">
              <p>
                first deposit<span style={{ color: "rgb(251, 60, 60)" }}>240000</span>
              </p>
              <p style={{ color: "orange" }}>+ $2533.0</p>
            </div>
            <p className="card2-p">
              Deposit 240000 for the first time in your account and you can receive 2533
            </p>
            <div className="card2-div1">
              <p className="card2-div1-p">0/2000</p>
              <Link to='/deposite'>
              <button className="card2-div1-btn">Deposit</button></Link>
            </div>
          </div>
          <div className="card2">
            <div className="card2-div1">
              <p>
                first deposit<span style={{ color: "rgb(251, 60, 60)" }}>5000</span>
              </p>
              <p style={{ color: "orange" }}>+ $533.0</p>
            </div>
            <p className="card2-p">
              Deposit 5000 for the first time in your account and you can receive 533
            </p>
            <div className="card2-div1">
              <p className="card2-div1-p">0/5000</p>
              <Link to='/deposite'>
              <button className="card2-div1-btn">Deposit</button></Link>
            </div>
          </div>
          <div className="card2">
            <div className="card2-div1">
              <p>
                first deposit<span style={{ color: "rgb(251, 60, 60)" }}>1000</span>
              </p>
              <p style={{ color: "orange" }}>+ $16.0</p>
            </div>
            <p className="card2-p">
              Deposit 1000 for the first time in your account and you can receive 16
            </p>
            <div className="card2-div1">
              <p className="card2-div1-p">0/1000</p>
              <Link to='/deposite'>
              <button className="card2-div1-btn">Deposit</button></Link>
            </div>
          </div>
          <div className="card2">
            <div className="card2-div1">
              <p>
                first deposit<span style={{ color: "rgb(251, 60, 60)" }}>295000</span>
              </p>
              <p style={{ color: "orange" }}>+ $8533.0</p>
            </div>
            <p className="card2-p">
              Deposit 295000 for the first time in your account and you can receive 8533
            </p>
            <div className="card2-div1">
              <p className="card2-div1-p">0/295000</p>
              <Link to='/deposite'>
              <button className="card2-div1-btn">Deposit</button></Link>
            </div>
          </div>
          {/* End of placeholder */}
        </div>

        <div className="card2-for" style={{margin:'10px',display:'flex',justifyContent:'space-around'}}>
          <p className="card2-footer" style={{color:'grey'}}>No more reminders today</p>
          <Link to='/report'>
          <button className="card2-footer-btn">Activity</button></Link>
        </div>
        <span className="close" onClick={onClose}>&times;</span>
      </div>
    </Modal>
  );
}

export default ExtraDepositModal;
