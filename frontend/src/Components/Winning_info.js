import React, { useState, useEffect } from 'react';
import './Winning_info.css';
import image1 from './image1.jpeg'; // import the first image
import image2 from './image2.jpeg'; // import the second image
import image3 from './image3.png'; // import the third image

function generateRandomName() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  let randomName = '';
  for (let i = 0; i < 5; i++) {
    randomName += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  randomName += '***';
  for (let i = 0; i < 3; i++) {
    randomName += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  randomName += numbers.charAt(Math.floor(Math.random() * numbers.length));
  randomName += numbers.charAt(Math.floor(Math.random() * numbers.length));
  return randomName;
}

function WinningInformation() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newWinner = {
        id: winners.length + 1,
        image: winners.length % 2 === 0 ? image1 : image2, // Alternate between two images
        name: generateRandomName(),
        amount: Math.floor(Math.random() * 10000) + 1, // Random amount between 1 and 10000
      };
      setWinners([newWinner, ...winners]);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [winners]);

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{maxWidth:'500px',backgroundColor:'white'}}>
        <h1 style={{ padding: '20px' ,fontSize:'25px',fontWeight:'bold'}}>
          <b style={{ color: 'red' }}>| </b>Winning Information
        </h1>
        <div className='winners'>
          {winners.map((winner) => (
            <div key={winner.id} className='names'>
              <img src={winner.image} alt='Winner' />
              <div>
                <p style={{fontSize:'12px'}}><b>{winner.name}</b></p>
              </div>
              <div className='span'></div>
              <div style={{ marginLeft: '55px' }}>
                <img src={image3} alt='Rupee' />
              </div>
              <div style={{ marginLeft: '35px' }}>
                <p><b>Received ₹{winner.amount.toFixed(2)}</b></p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{height:'600px'}}>

      </div>
    </div>
  );
}

export default WinningInformation;
