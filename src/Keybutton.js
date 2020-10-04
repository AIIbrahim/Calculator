import React from 'react';
import './App.css';


function Keybutton (props){ 
     
        const pressed = ()=>{
          console.log(props.status);
          if(props.status ===0){
            props.setFirstValue(props.firstValue.concat(props.digit))   
          }else{
            props.setSecondValue(props.secondValue.concat(props.digit))
            }
        }
        return(
          <button  className="keys" onClick={pressed} >{props.digit}</button>
         )

}
  

  
export default Keybutton;
