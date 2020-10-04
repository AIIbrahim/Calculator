import React from 'react';
import './App.css';


function Button (props){ 
  const respond = ()=>{
    props.setStatus(1)
    props.setOperate(props.operation)
  }
  
  return(
    <button  className="operatekeys" onClick={respond} >{props.operation}
    </button>)
};  
export default Button;
