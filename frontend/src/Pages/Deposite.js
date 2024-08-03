import React, { useState, useEffect } from 'react';
import RenderRazorpay from "./RenderRazorpay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faRecycle, faCreditCard ,faBook,faStickyNote} from '@fortawesome/free-solid-svg-icons';
import './Deposite.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const serverBaseUrl = "//localhost:8080/api/user";

const Deposite = () => {

  const nevigate = useNavigate();
  const [user,setUser] = useState({});
  const [displayRazorpay, setDisplayRazorpay] = useState (null);
  const [orderDetails, setOrderDetails] = useState (null);

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

  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [isAmountSelected, setIsAmountSelected] = useState(false);

  const handleAmountClick = (value) => {
    setAmount(value);
    setSelectedAmount(value);
    setIsAmountSelected(true);
  };

  const handleChange = (e) => {
    const inputAmount = e.target.value;
    
    if (inputAmount === '' || (parseInt(inputAmount) <= 10000000000 && !isNaN(inputAmount))) {
      setAmount(inputAmount);



      setError('');
    } else {
      setError("Can't exceed 10000");
    }
  };

  const handleClear = () => {
    setAmount('');
    setError('');
    setSelectedAmount('');
    setIsAmountSelected(false);
  };

  const [isDeposited, setIsDeposited] = useState(false);
  
  const handleDeposit = async () => {
    console.log(selectedAmount);
    console.log("here");
    setIsDeposited(true); 
    // const handleCreateOrder = async (selectedAmount) => {
      // const currency = "INR";
      const data = await axios.post(serverBaseUrl + '/order',
        {
          amount: selectedAmount * 100, 
          currency: "INR",
          keyId: "rzp_test_AUnRB29Hb1QMeS", // process.env.REACT_APP_RAZORPAY_KEY_ID,
          keySecret: "cXVGfjVnEeyTsZCSAbctDxAF" // process.env.REACT_APP_RAZORPAY_KEY_SECRET,
        }
      );
      if (data && data.data.order_id) {
        setOrderDetails({
          orderId: data.data.order_id,
          currency: data.data.currency,
          amount: data.data.amount,
        });
        setDisplayRazorpay(true);
      }
      console.log(displayRazorpay, orderDetails);
  };

  return (
    <div style={{backgroundColor:'grey',display:'flex',justifyContent:'center'}}>
    <div  className='whole' style={{backgroundColor:'white',width:'500px'}}>
      <div style={{display:'flex',fontSize:'25px',justifyContent:'',margin:'15px'}} >
        <div  onClick={goBack} style={{color:'black'}}> <FontAwesomeIcon icon={faArrowLeft} style={{cursor:'pointer'}}/></div>
        <div  style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'35%'}}>Deposit</div>
      </div>

      <div style={{ backgroundColor: 'rgba(255, 0, 0.9, 0.6)', height: '190px', padding: '25px', marginLeft: '15px', marginRight: '15px', borderRadius: '25px', display: 'flex', }}>

        <div style={{ color: 'white', fontSize: '35px' }}>
          <div style={{ display: 'flex',fontSize:'25px' }}>
            <FontAwesomeIcon icon={faWallet} size='20' style={{ color: 'yellow', fontSize: 'px', marginRight: '15px', marginTop: '5px' }} />
            <div>Balance</div>
          </div>

          <div style={{ marginTop: '15px',fontSize:'25px' }}><b >₹ 0.00</b><FontAwesomeIcon icon={faRecycle} style={{ color: 'white', fontSize: '30px', marginRight: '15px', marginTop: '10px', marginLeft: '25px' }} /></div>
          <div style={{ marginTop: '20px',alignItems:'end' }}>
            **** <span> ****</span>
          </div>
        </div>
      </div>
      <div className="options">
        <div style={{ fontSize: '25px', fontWeight: 'bold', display: 'flex' }}>
          <FontAwesomeIcon icon={faCreditCard} style={{ color: 'rgb(255, 102, 102)', fontSize: '30px', marginRight: '15px' }} />
          Deposit Amount
        </div>

        <div className='amount'>
          <div className={`rupee ${selectedAmount === '1000' ? 'selected' : ''}`} onClick={() => handleAmountClick('1000')}>₹ 1K </div>
          <div className={`rupee ${selectedAmount === '3000' ? 'selected' : ''}`} onClick={() => handleAmountClick('3000')}>₹ 3K</div>
          <div className={`rupee ${selectedAmount === '5000' ? 'selected' : ''}`} onClick={() => handleAmountClick('5000')}>₹ 5K</div>
        </div>
        <div className='amount'>
          <div className={`rupee ${selectedAmount === '10000' ? 'selected' : ''}`} onClick={() => handleAmountClick('10000')}>₹ 10K </div>
          <div className={`rupee ${selectedAmount === '50000' ? 'selected' : ''}`} onClick={() => handleAmountClick('50000')}>₹ 50K</div>
          <div className={`rupee ${selectedAmount === '100000' ? 'selected' : ''}`} onClick={() => handleAmountClick('100000')}>₹ 100K</div>
        </div>
        <div >
          <input
            type="text"
            className="large-input"
            value={amount}
            onChange={handleChange}
            placeholder="Please enter the amount"
          />
          
          
        </div>
        <div
          className='deposit-button'
          style={{ backgroundColor: isAmountSelected ? 'red' : 'grey', color: isAmountSelected ? 'white' : 'white' ,cursor:'pointer'}}
          onClick={handleDeposit}
        >
          Deposit
        </div>
        
        {displayRazorpay && (
          <RenderRazorpay
            amount={orderDetails.amount}
            currency={orderDetails.currency}
            orderId={orderDetails.orderId}
            keyId={"rzp_test_AUnRB29Hb1QMeS"}
            keySecret={"cXVGfjVnEeyTsZCSAbctDxAF"}
          />
        )}

      </div>

      <div className='instructions'>
        <div style={{display:'flex',fontSize:'25px',fontWeight:'bold'}}>
        <FontAwesomeIcon icon={faBook} style={{ color: 'rgb(255, 102, 102)', fontSize: '30px', marginRight: '15px' }} />Recharge Instructions
        </div>
        <div className='cont'>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span> If the transfer time is up ,please fill out the deposite form again.
          </p>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span>The transfer amount must match the order you created,otherwise the money cannot be credited successfully.
          </p>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span>If you transfer the wrong amount,our company will not be responsible fro the lost amount! 
          </p>
          <p>
          <span style={{ color: 'red' ,margin:'5px'}}>&#9670;</span>Note:Do not cancel the deposite order after the money has been transferred.
          </p>
        </div>

        {/* <div className='history'>
        <FontAwesomeIcon icon={faStickyNote} style={{ color: 'rgb(255, 102, 102)', fontSize: '30px', marginRight: '15px' }} />Deposite history
        </div> */}
      </div>
      <div style={{height:'150px'}}>
                                    {/* <!--footer--> */}
                                </div>
    </div>
   
    
    
    </div>
  );
};

export default Deposite;
