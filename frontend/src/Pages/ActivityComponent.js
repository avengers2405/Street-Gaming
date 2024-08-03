import React from 'react';
import './ActivityComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

function ActivityComponent() {  
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


    const goBack = () => {
        window.history.back();
      };
    return (
        <div style={{backgroundColor:'grey'}}>
        <div className="container">
            <div className="innerContainer">
                <div className="bg-pink-500 p-4 text-white">
                    <div className="text-center mb-3">
                    <div style={{display:'flex',fontSize:'25px',justifyContent:'',margin:'15px'}} >
        <div  onClick={goBack} style={{color:'black'}}> <FontAwesomeIcon icon={faArrowLeft}  style={{color:'white',cursor:'pointer'}}/></div>
        <div  style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'35%',fontWeight:'bold'}}>91 CLUB</div>
      </div>
                        
                        <p style={{fontSize:'25px',display:'flex',fontWeight:'bold'}}>Activity</p>
                        <p style={{display:'flex'}}>Please remember to follow the event page</p>
                        <p style={{display:'flex'}}>We will launch user feedback activities from time to time</p>
                    </div>
                </div>
                <div className="flex justify-between mb-4" style={{margin:'10px'}}>
                    <div className="flex flex-col items-center">
                        <img src={require('../Components/images/Activitybonus.png')} height={64} width={64} alt="Activity Award" className="mb-2" />
                        <span style={{fontSize:'13px'}}>Activity Award</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={require('../Components/images/invitation.png')} height={64} width={64} alt="Invitation Bonus" className="mb-2" />
                        <span style={{fontSize:'13px'}}>Invitation Bonus</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={require('../Components/images/img3.png')} height={64} width={64} alt="Betting Rebate" className="mb-2" />
                        <span style={{fontSize:'13px'}}>Betting Rebate</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={require('../Components/images/img4.png')} height={64} width={64} alt="Super Jackpot" className="mb-2" />
                        <span style={{fontSize:'13px'}}>Super Jackpot</span>
                    </div>
                </div>
                <div className="grid" style={{display:'flex'}}>
                    <div className="boxShadow">
                        <img src={require('../Components/images/img5.png')} height={100} width={170} alt="Gifts Image" className="mb-2" />
                        <h3 className="font-bold mb-2">Gifts</h3>
                        <p>Enter the redemption code to receive gift rewards</p>
                    </div>
                    <div className="boxShadow">
                        <img src={require('../Components/images/img6.png')} height={100} width={170} alt="Attendance Bonus Image" className="mb-2" />
                        <h3 className="font-bold mb-2">Attendance bonus</h3>
                        <p>The more consecutive days you sign in, the higher the reward will be.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-4 boxShadow">
                    <img src={require('../Components/images/img7.png')} height={150} width={350} alt="First Deposit Bonus" className="mb-2" />
                    <h3 className="text-xl font-bold mb-2">New Member First Deposit Bonus</h3>
                </div>
                <div className="flex flex-col items-center mb-4 boxShadow">
                    <img src={require('../Components/images/image8.png')} height={150} width={350} alt="First Deposit Bonus" className="mb-2" />
                    <h3 className="text-xl font-bold mb-2">91 CLUB Official Channel</h3>
                </div>
                <div className="flex flex-col items-center mb-4 boxShadow">
                    <img src={require('../Components/images/image9.png')} height={150} width={350} alt="First Deposit Bonus" className="mb-2" />
                    <h3 className="text-xl font-bold mb-2">Real time Rebate</h3>
                </div>
                <div className="flex flex-col items-center mb-4 boxShadow">
                    <img src={require('../Components/images/image10.png')} height={150} width={350} alt="First Deposit Bonus" className="mb-2" />
                    <h3 className="text-xl font-bold mb-2">Extra bonus slot games</h3>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ActivityComponent;
