import React, { useEffect, useState } from "react";
import "./Wallet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from "axios";


    const goBack = () => {
        window.history.back();
      };

export default function Wallet() {
  
  const nevigate = useNavigate();
  const [user,setUser] = useState({});
  const login = ()=>{
  axios.get("/user/getuser")
  .then((res)=>{
      
    const data = res.data;
   setUser(data);
  })
  .catch(e =>{
    alert("Please Login first");
   nevigate('/login');
  })}

  useEffect(() => {

      login();
   
     },[]);

  return (
    <div style={{backgroundColor:'grey'}}>

    
    <div className="wallet-box">
    <div style={{display:'flex',fontSize:'25px',justifyContent:'',margin:'15px'}} >
                <div  onClick={goBack} style={{color:'black'}}> <FontAwesomeIcon icon={faArrowLeft}  style={{cursor:'pointer'}}/></div>
                <div  style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'35%'}}>Wallet</div>
            </div>

      <div className="balance-wallet">
        <p className="total-balance-wallet">$0.00</p>
        <p>Total balance</p>
      </div>

      <div className="wallet-count">
        <div className="wallet-count-1">
          <p className="wallet-count-1-1">0</p>
          <p className="wallet-count-1-space">Total amount</p>
        </div>

        <div className="wallet-count-2">
          <p className="wallet-count-1-1">0</p>
          <p className="wallet-count-1-space">Total deposit amount</p>
        </div>
      </div>

      <div className="next-step">
        <div className="next-step-first">
          <div className="next-step-deposit">
            <h1>0%</h1>
            <p className="next-step-p">$0.00</p>
            <p>main wallet</p>
          </div>

          <div className="next-step-deposit">
            <h1>0%</h1>
            <p className="next-step-p">$0.00</p>
            <p>3rd party wallet</p>
          </div>
        </div>
        <button className="next-step-btn">Main wallet transfer</button>
        <div className="next-step-fields">
          <div className="next-step-field1">Deposit</div>
          <div className="next-step-field1">Withdraw</div>
          <div className="next-step-field1">Deposit History</div>
          <div className="next-step-field1">Withdrawal History</div>
        </div>
      </div>

      <div className="container-last">
        <div className="last-field">
          <div className="last-field1">
            <p>0.00</p>
            <p>Lottery</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>TB_chess</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>Wickets9</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>JILI</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>MG</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>JGB</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>EVO_Video</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>TB</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>Card365</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>AG_Video</p>
          </div>
          <div className="last-field1">
            <p>0.00</p>
            <p>PG</p>
          </div>
        </div>
      </div>
      <div style={{height:'100px'}}>
                                    {/* <!--footer--> */}
                                </div>
    </div>
    </div>
  );
}
