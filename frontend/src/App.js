import React from 'react';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';


import Home from './Pages/Home';

import Footer from './Pages/Footer';

 // Import the Promo component
import Wallet from './Pages/Wallet';
import Account from './Pages/Account';
import LoginEmail from './Pages/LoginEmail';
import LoginPhone from './Pages/LoginPhone';
import Promotion from './Pages/Promotion';
import ActivityComponent from './Pages/ActivityComponent';
import FadeBackground from './Pages/FadeBackground';
import ExtraDeposit from './Pages/ExtraDeposit';
import Deposite from './Pages/Deposite';
import ExtraDepositReport from './Pages/ExtraDepositReport';

function App() {
  return (
    
     <Router>
    <Routes>
      <Route path="/" element={<FadeBackground/>}/>
     <Route path="/home" element={<Home/>}/>
     {/* <Route path="/email" element={<Log/>}/> */}
       <Route path="/login" element={<LoginEmail/>}/> 
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/promo" element={<Promotion/>}/>
      <Route path="/activity" element={<ActivityComponent/>}/>
       {/* <Route path="*" element={<Navigate to="/home" />} /> */}
      <Route path="/extra" element={<ExtraDeposit/>}/>
      <Route path="/deposite" element={<Deposite/>}/>
      <Route path="/report" element={<ExtraDepositReport/>}/>
      </Routes> 
    
    
 </Router>
    
  );
}

export default App;
