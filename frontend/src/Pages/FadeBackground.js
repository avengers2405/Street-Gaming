import React, { useEffect, useState } from 'react';


import logo1 from '../Components/logo1.png';
import logo2 from '../Components/logo2.png';
import { useNavigate } from 'react-router-dom';

function FadeBackground() {
  const [redirect, setRedirect] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      //setRedirect(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);
 const navigate=useNavigate();
  useEffect(() => {
    if (redirect) {
      navigate('/home') // Redirect to the home page
    }
  }, [redirect, navigate]);

  return (
    <div style={{backgroundColor:'grey',justifyContent:'center',display:'flex'}}>

    
    <div className="fade-background" style={{backgroundColor:'#e83b3b',width:'500px',justifyContent:'center',height:'100vh'}}>
      <div style={{ display:'flex',justifyContent:'center', alignContent: 'center' }}>
      <img src={logo1} alt={''}  />
      </div>
      <h2 style={{  color: 'white',display:'flex',justifyContent:'center',fontSize:'25px' }}>
        Withdraw fast, Safe and stable
      </h2>
      <img src={logo2} alt={''} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red', fontSize: '50px' ,color:'white',fontWeight:'bold',fontStyle:'italic'}}>91 CLUB</div>
    </div>
    </div>
  );
}

export default FadeBackground;
