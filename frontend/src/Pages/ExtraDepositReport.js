import React, { useEffect, useState } from "react";
import "./ExtraDepositReport.css";
import {Link, useNavigate} from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

    const goBack = () => {
        window.history.back();
      };
export default function ExtraDepositReport() {

  
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
    <div style={{justifyContent:'center',display:'flex',backgroundColor:'grey'}}>
    <div style={{width:'500px',justifyContent:'center'}}>
      

      <div style={{backgroundColor:'white'}}>
      <div style={{display:'flex',fontSize:'25px',justifyContent:'',margin:'15px'}} >
        <div  onClick={goBack} style={{color:'black'}}> <FontAwesomeIcon icon={faArrowLeft} style={{cursor:'pointer'}}/></div>
        <div  style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'35%'}}>Deposit</div>
      </div>
      <div >
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

        <div className="card2">
          <div className="card2-div1">
            <p>
              first deposit<span Style="color: rgb(251, 60, 60);">2000</span>
            </p>
            <p Style="color: orange">+ $188.0</p>
          </div>
          <p className="card2-p">
            Deposit 2000 for the first time in your accountand you can receive
            188
          </p>
          <div className="card2-div1">
            <p className="card2-div1-p">0/2000</p>
            <Link to='/deposite'>
            <button className="card2-div1-btn">Deposit</button></Link>
          </div>
        </div>
        <div style={{marginTop:'25px',backgroundColor:'white',height:'50px'}}>

        </div>
      </div>
      <div style={{backgroundColor:'white'}}>
        <div style={{}}>
        <p  style={{backgroundColor:'red',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',color:'white',fontSize:'23px'}}>Activity Rules</p>
      
        <div className='instructions' style={{height:'540px'}}>

        <div className='cont' style={{height:'500px'}}>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span>Exclusive for the first recharge of the account. There is only one
            chance. The more you recharge, the more rewards you will receive.
            The highest reward is ₹8,888.00;
          </p>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span>Activities cannot be participated in repeatedly;
          </p>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span>Rewards can only be claimed manually on IOS, Android, H5, and PC;
          </p>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span>The bonus (excluding the principal) given in this event requires
            1.00 times the coding turrnover  before it can be
            withdrawn, and the coding does not limit the platform;
          </p>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span>This event is limited to normal hurman operations by the account
            owner. 
          </p>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span> In order to avoid  in text understanding, the platform
            reserves the right of final interpretation of this eventbe
            deducted, or even blacklisted;
          </p>
        </div>

        {/* <div className='history'>
        <FontAwesomeIcon icon={faStickyNote} style={{ color: 'rgb(255, 102, 102)', fontSize: '30px', marginRight: '15px' }} />Deposite history
        </div> */}
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}
