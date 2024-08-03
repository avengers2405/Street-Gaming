import React, {useEffect, useState} from "react";
import "./Home.css";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdvertiseImage2 from '../Components/Advertise2.png'; // Adjust the path as needed
import AdvertiseImage3 from '../Components/Advertise3.png';
import AdvertiseImage4 from '../Components/Advertise4.png'; // Adjust the path as needed
import ExtraDeposit from "./ExtraDeposit";
import {  FaWindows } from 'react-icons/fa';
import Winning_info from '../Components/Winning_info'
import { FaEnvelope } from 'react-icons/fa';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const images = [AdvertiseImage2, AdvertiseImage3, AdvertiseImage4]; // Array containing the images
function Home() {

  
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
   
     },[]);



    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1, // Show one image at a time
         // Scroll one image at a time
        autoplay: true,
        autoplaySpeed: 3000
      };

      const [isDepositModalOpen, setDepositModalOpen] = useState(false);

  const toggleDepositModal = () => {
    setDepositModalOpen(!isDepositModalOpen);
  };
  return (
    <div style={{backgroundColor:'white'}}>
    <div style={{maxwidth: '441px',display:'flex',flexDirection:'column',backgroundColor:'grey' }}>
        <div className="navbar-items" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{marginLeft:'20px'}}>91 CLUB</div>
          <div style={{display:'flex'}}>
        <div className="message-box-icon-container">
          <FaEnvelope className="message-box-icon" />
          <span className="notification-badge"></span>
        </div>
         <ExtraDeposit isOpen={isDepositModalOpen} onClose={() => setDepositModalOpen(false)} />
        <div onClick={toggleDepositModal} style={{cursor: 'pointer',fontSize:'15px'}}>Deposite</div>
        </div>
        </div>
       
        <div className="carousel-container"> {/* Container for centering the carousel */}
      <Slider {...settings} className="carousel" prevArrow={null} nextArrow={null}> {/* Apply carousel styles */}
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{display:'flex',justifyContent:'center',width:'500px',backgroundColor:'white'}}>
      <div className="scrollable-container">
        <div className="boxes-container">
          <div className="box1"><b>Lottery</b></div>
          <div className="box" style={{color:'black'}}>Mini Games</div>
          <div className="box" style={{color:'black'}}>Popular</div>
          <div className="box" style={{color:'black'}}>Slots</div>
          <div className="box" style={{color:'black'}}>Fishing</div>
          <div className="box" style={{color:'black'}}>PVC</div>
          <div className="box" style={{color:'black'}}>Casino</div>
          <div className="box" style={{color:'black'}}>Sports</div>
        </div>
      </div>
      <div className="rectangular-boxes-container">
        <div className="rectangular-box">
          Win Go
          <p>Guess Number</p>
          <p>Green/Red/Purple to win</p>
        </div>
        <div className="rectangular-box">
          K3
          <p>Guess Number</p>
          <p>Big/Small/Odd/Even</p>
        </div>
        <div className="rectangular-box">
          5D
          <p>Guess Number</p>
          <p>Big/Small/Odd/Even</p>
        </div>
        <div className="rectangular-box">
          TRX Win
          <p>Guess Number</p>
          <p>Green/Red/Purple to win</p>
        </div>
        <div className="rectangular-box1">
          <FaWindows />View All
        </div>
      </div>
    </div>
    

     

    </div>
    <Winning_info/>
    </div>
    <Footer/>
    </div>
    
  );
}
export default Home;
