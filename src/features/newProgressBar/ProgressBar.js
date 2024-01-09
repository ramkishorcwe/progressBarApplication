import React, { useEffect, useRef, useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {
  const [state, setState] = useState(0);
  const ref = useRef(null);

  const startHandle = () => {
    ref.current = setInterval(() => {
      setState((prev) => {
        const newState = prev + 10;
        if (newState <= 100) {
          return newState;
        } else {
          clearInterval(ref.current);
          return 100;
        }
      });
    }, 1000);
  };

  return (
    <>
      <button onClick={startHandle}>Start</button>
      <div className="main">
        <div className="container">
          <div style={{ width: `${state}%`, transition: "1s" }} className="progress-bar">
            {`${state}%`}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;



      // setState(prev=>{
      //   ref.current = setInterval(()=>{
      //     if(temp1.current<=100){
      //       return temp1.current+10;
      //     }
      //     else{
      //       // return 0;
      //       clearInterval(ref.current);
      //     }
      //   },1000)
      // });