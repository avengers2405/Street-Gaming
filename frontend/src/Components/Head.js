import React from 'react';
import "./Head.css"

export default function Head() {
  return (
    <div>
      <div className="box">
        <div className="headlog">
          <div className="arrow">{"<"}</div>
          <div className="club">91CLUB</div>
          <div>EN</div>
        </div>
        <div className="para">
            <p className="p1">Log in</p>
            <p className="p2 p3">Please log in with your phone number or email</p>
            <p className="p2">If you forget your password, please contact customer service</p>
        </div>
      </div>
    </div>
  )
}
