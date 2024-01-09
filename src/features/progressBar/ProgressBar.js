
// for in use  effect

import React, { useEffect , useState} from "react";
import './ProgresssBar.css';

function ProgressBar() {
  const [state, setState] = useState(0);
  var interval;
  useEffect(()=>{
    if(state<100){
      interval = setInterval(()=>{
        setState((prev) => prev + 10)
      },1000
      );
    }
      return ()=>clearInterval(interval);
    
  },[state])
  

  return (
    <div >
     
      <p className="text">{`${state}%`}</p>
      <div className="container">
        <div className="slide-bar" style={{width:`${state}%`}}>{`${state}%`}</div>
      </div>
    </div>
  );
}

export default ProgressBar;
