import React, { useEffect, useState } from 'react';
import './Promotion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { FaUser, FaStickyNote, FaDollarSign, FaBook, FaUserTie, FaMoneyCheckAlt } from 'react-icons/fa'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Promotion = () => {

    
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


    const Container = ({ header, children, position }) => (
        <div className={`container ${position}`} style={{width:'200px',height:'350px',marginTop:'25px'}}>{children}

            <div className="content">
                <div className='heading' style={{ fontSize: "17px", marginLeft: '10px' }}> <FaUser size={24} style={{ marginRight: '10px', color: 'red' }} />{header}</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>0</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '14px', color: 'grey' }}>number of register</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'lightgreen' }}>0</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '14px', color: 'grey' }}>Deposite number</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', color: 'red' }}>0</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '14px', color: 'grey' }}>Deposite amount</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>0</div>
                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '14px', color: 'grey',alignItems:'center', marginLeft:'25px'}}>Number of people making first deposite</div>
            </div>
        </div>
    );

    const goBack = () => {
        window.history.back();
      };
    return (
        <div style={{display:'flex',justifyContent:'center',backgroundColor:'grey' }}>
            <div className='inner-container'>
            <div style={{display:'flex',fontSize:'25px',justifyContent:'',margin:'15px'}} >
                <div  onClick={goBack} style={{color:'black'}}> <FontAwesomeIcon icon={faArrowLeft}  style={{cursor:'pointer'}}/></div>
                <div  style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'35%'}}>Agency</div>
            </div>

                <div className="backg">
                    <div style={{ height: '10px' }}></div>
                    <div className="details">
                        0
                    </div>
                    <div className='com'>
                        Yesterday's total commission
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', fontSize: '14px', margin: '10px' }}>
                        Upgrade the level to increase commission income
                    </div>
                    <div className="app">
                        <Container position="bottom-left" header='Direct subordinates' />
                        <Container position="bottom-right" header='Team subordinates' />
                    </div>
                </div>
                <div className='invite' style={{  display: 'flex', justifyContent: 'center' }}>
                    Invitation link
                </div>

                <div className='data'>
                    <div style={{fontSize:'18px',display:'flex'}}><FaStickyNote size={24} style={{ marginLeft: '10px', marginRight: '10px', color: 'red' }} />Subordinate data</div>
                </div>
                <div className='data'>
                    <div style={{fontSize:'18px',display:'flex'}}><FaDollarSign size={24} style={{ marginLeft: '10px', marginRight: '10px', color: 'red' }} />Commission detail</div>
                </div>
                <div className='data'>
                    <div style={{fontSize:'18px',display:'flex'}}><FaBook size={24} style={{ marginLeft: '10px', marginRight: '10px', color: 'red' }} />Invitation rules</div>
                </div>
                <div className='data'>
                    <div style={{fontSize:'18px',display:'flex'}}><FaUserTie size={24} style={{ marginLeft: '10px', marginRight: '10px', color: 'red' }} />Agent line customer services</div>
                </div>
                <div className='data'>
                    <div style={{fontSize:'18px',display:'flex'}} ><FaMoneyCheckAlt size={24} style={{ marginLeft: '10px', marginRight: '10px', color: 'red' }} />Rebate ratio</div>
                </div>
                <div className='promodet'>
                    <div style={{ display: 'flex', margin: '10px', marginTop: '20px', fontSize: '18px'}}>
                        <FaStickyNote size={24} style={{ marginLeft: '10px', marginRight: '10px', color: 'red',  }} />Promotion data
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%' }}>
                        <div style={{ fontSize: '20px', marginRight: '40%' }}>
                            0
                        </div>
                        <div style={{ fontSize: '20px' }}>
                            0
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%' }}>
                        <div style={{ fontSize: '14px', marginRight: '5%', color: 'grey' }}>
                            This Week
                        </div>
                        <div style={{ fontSize: '14px', color: 'grey' }}>
                            Total commission
                        </div>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%', marginTop: '20px' }}>
                        <div style={{ fontSize: '20px', marginRight: '40%' }}>
                            0
                        </div>
                        <div style={{ fontSize: '20px' }}>
                            0
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%' }}>
                        <div style={{ fontSize: '14px', marginRight: '5%', color: 'grey' }}>
                            Direct subordinates
                        </div>
                        <div style={{ fontSize: '14px', color: 'grey' }}>
                            Total number of subordinates in the team
                        </div>

                    </div>
                </div>
                <div style={{height:'100px'}}>

                </div>
            </div>
        </div>
    );
};

export default Promotion;
