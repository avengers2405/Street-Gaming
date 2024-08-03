import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaHome, FaEnvelope, FaGem, FaWallet, FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container" style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '500px', backgroundColor: 'white', alignItems: 'center', }}>
      <div className="footer-items">
          <Link to="/home">
            <span><FaHome size={35} /></span>
          </Link>
          <Link to="/activity">
          <span><FaEnvelope size={35} /></span>
          </Link>
         
          <Link to="/promo">
            <span><FaGem size={35} /></span>
          </Link>
          <Link to="/wallet">
          <span><FaWallet size={35} /></span>
          </Link>
          <Link to="/account">
          <span><FaUser size={35} /></span>
          </Link>
      </div>
      <div className="footer-items1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <span>Home</span>
        <span>Activity</span>
        <span>Promotion</span>
        <span>Wallet</span>
        <span>Account</span>
      </div>
    </div>
  );
};

export default Footer;
