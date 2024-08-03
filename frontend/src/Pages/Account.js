import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import '../App.css'
import Footer from './Footer'
import axios from 'axios'
export default function Account() {
    const nevigate  = useNavigate();
    const [user,setUser]=useState();


    
  useEffect(() => {

   axios.get("/user/getuser")
   .then((res)=>{
       
     const data = res.data;
    setUser(data);
   })
   .catch(e =>{
    alert("Please login first");
    nevigate('/login');
   })

  }, []);

  const logout = ()=>{
    
    axios.get('/user/logout')
    .then(e=>{
        alert("User Logged out ");
        nevigate('/')
    })
    .catch(e=>{
        alert(e.message);

    })
  }

  // const navigate = useNavigate();



    return (
        <>
            <body>
                <div className="bodybgcolor">
                    <div className="flex justify-center" style={{backgroundColor:'grey'}}>
                        <div className="w-96 bg-white-300 relative" style={{ height: "100%", width: "500px", overflow: "hidden" ,backgroundColor:'white'}}>
                            {/* <!--background red-->  */}
                            <div className="box-border grad" style={{ width: "inherit", height: "208px", borderBottomLeftRadius: "15%", borderBottomRightRadius: "15%" }}></div>
                            {/* <!--main page--> */}
                            <div className="absolute top-0 flex gap-4 m-5 mt-6 mb-8">
                                {/* <!--profile section--> */}
                                <div>
                                    {/* <img className="w-20 h-auto rounded-full" src="assests/ProfilePhoto.png" alt="profile photo" /> */}
                                </div>
                                <div>
                                    <div className="text-white text-xm">Phone: {user?user.phone:'0000000000'} </div>
                                    {/* <!--Rank badge is remaining--> */}
                                    <div className="flex text-xs">
                                        <div className="rounded-full userid flex gap-2 pl-1 pr-1 text-white ">
                                            <span>UID</span>
                                            <span>|</span>
                                            <span>{user?user.uid:'0000'}</span>
                                            <img className="w-3  h-3" src="assests/IDcopy.png" alt="IDcopy symbol" />
                                        </div>
                                    </div>
                                    <div className="text-white text-xs">
                                        <span>Last Login:</span>
                                        <span>{user?user.lastLogin[user.lastLogin.length-1]:'-----'}</span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: "-96px" }}>
                                {/* <!--balance section--> */}
                                <div className="bg-white m-3 mb-0 p-3 rounded-t-lg shadow-lg">
                                    <div className="text-gray-700">Total Balance</div>
                                    <div className="flex gap-1 items-end border-b border-gray-400 pb-2">
                                        <span className="text-xl font-semibold ">₹0.00</span>
                                        <img className="w-4 h-6" src="assests/Refresh.png" alt="reload symbol" />
                                    </div>
                                </div>
                                <div className="bg-white m-3 mt-0 rounded-b-lg flex justify-evenly pb-6 shadow-lg">
                                    <div className="flex flex-col items-center">
                                        <img className="w-10 h-10" src="assests/Wallet.png" alt="Wallet" />
                                        <span>Wallet</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="w-10 h-10" src="assests/Deposit.png" alt="Deposit" />
                                        <span>Deposit</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="w-10 h-10" src="assests/Withdraw.png" alt="Withdraw" />
                                        <span>Withdraw</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img className="w-10 h-10" src="assests/VIP.png" alt="VIP" />
                                        <span>VIP</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* <!--history section--> */}
                                <div className="grid grid-rows-2 grid-cols-2 gap-3 m-3 mt-5" style={{display:'flex',justifyContent:'center'}}>
                                    <div className=" gap-1 items-center bg-white rounded-md p-3 shadow-lg" >
                                        <img className="h-12" src="assests/Game History.png" alt="Game History" />
                                        <div className="flex flex-col">
                                            <span>Game History</span>
                                            <span className="font-light" style={{ fontSize: "0.8rem" }}>My game history</span>
                                        </div>
                                    </div>
                                    <div className=" gap-1 items-center bg-white rounded-md p-3 shadow-lg">
                                        <img className="h-12" src="assests/Transaction.png" alt="Transaction" />
                                        <div className="flex flex-col">
                                            <span>Transaction</span>
                                            <span className="font-light" style={{ fontSize: "0.8rem" }}>My transaction history</span>
                                        </div>
                                    </div>
                                    <div className=" gap-1 items-center bg-white rounded-md p-3 shadow-lg">
                                        <img className="h-12" src="assests/Deposit2.png" alt="Deposit" />
                                        <div className="flex flex-col">
                                            <span>Deposit</span>
                                            <span className="font-light" style={{ fontSize: "0.8rem" }}>My deposit history</span>
                                        </div>
                                    </div>
                                    <div className=" gap-1 items-center bg-white rounded-md p-3 shadow-lg">
                                        <img className="h-12" src="assests/withdraw2.png" alt="Withdraw" />
                                        <div className="flex flex-col">
                                            <span>Withdraw</span>
                                            <span className="font-light" style={{ fontSize: "0.8rem" }}>My withdraw history</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* <!--option label--> */}
                                <div className="bg-white rounded-t-md m-3 p-3 pb-0 mb-0 shadow-lg">
                                    <div className="flex justify-between border-b border-gray-400 pb-3 ">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6" src="assests/Notification.png" alt="notification" />
                                            <span className="font-light">Notification</span>
                                        </div>
                                        <div>
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white m-3 p-3 pb-0 mt-0 mb-0 shadow-lg">
                                    <div className="flex justify-between border-b border-gray-400 pb-3 ">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6" src="assests/Gifts.png" alt="gifts" />
                                            <span className="font-light">Gifts</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white m-3 p-3 pb-0 mt-0 mb-0 shadow-lg">
                                    <div className="flex justify-between border-b border-gray-400 pb-3 ">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6" src="assests/Game Statistics.png" alt="Game statistics" />
                                            <span className="font-light">Game statistics</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-b-md m-3 p-3 mt-0 shadow-lg">
                                    <div className="flex justify-between border-b border-gray-400 pb-3 ">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6" src="assests/language.png" alt="Language" />
                                            <span className="font-light">Language</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <div>English</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col p-2 pt-3 bg-white m-3 rounded-md gap-4 shadow-lg">
                                    <div>Service Center</div>
                                    <div className="    grid-rows-2">
                                        <div style={{display:'flex',justifyContent:'space-between'}}>
                                        <div className="flex flex-col items-center p-1">
                                            <img className="w-8 h-8" src="assests/Settings.png" alt="Settings" />
                                            <span className="font-light text-sm">Settings</span>
                                        </div>
                                        <div className="flex flex-col items-center p-1">
                                            <img className="w-8 h-8" src="assests/Feedback.png" alt="Feedback" />
                                            <span className="font-light text-sm">Feedback</span>
                                        </div>
                                        <div className="flex flex-col items-center p-1">
                                            <img className="w-8 h-8" src="assests/Notification2.png" alt="notification" />
                                            <span className="font-light text-sm">Notification</span>
                                        </div>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-around'}}>
                                        <div className=" items-center p-1">
                                            <img className="w-8 h-8" src="assests/serviceCenter.png" alt="customer serviceCenter" />
                                            <span className="font-light text-sm text-center"> Customer service</span>
                                        </div>
                                        <div className="flex flex-col items-center p-1">
                                            <img className="w-8 h-8" src="assests/Guide.png" alt="guide" />
                                            <span className="font-light text-sm">Beginner's Guide</span>
                                        </div>
                                        <div className="flex flex-col items-center p-1">
                                            <img className="w-8 h-8" src="assests/AboutUs.png" alt="About us" />
                                            <span className="font-light text-sm">About us</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-white flex rounded-full m-3 mt-12 mb-12 items-center justify-center gap-3 p-2" style={{ border: '0.5px solid rgb(82, 82, 82)' }}>
                                        <img className="h-6 w-6" src="assests/LogoutIcon.png" alt="logout" />
                                        <button className="font-light"onClick={logout}  >Log Out</button>
                                    </div>
                                </div>
                                <div style={{height:'100px'}}>
                                    {/* <!--footer--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </body>
        </>
            )
}
