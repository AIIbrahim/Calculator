import React from 'react';
import './App.css';


function Ansbutton (props){ 
    const result = ()=>{
      if(props.operate === '+'){
        props.setAnswer( parseFloat(props.firstValue) + parseFloat(props.secondValue) ); 
      }else if(props.operate === '-'){
        props.setAnswer( parseFloat(props.firstValue) - parseFloat(props.secondValue)  );
      }else if(props.operate === '*'){
        props.setAnswer( parseFloat(props.firstValue) * parseFloat(props.secondValue) );
      }else if(props.operate === '/'){
        props.setAnswer( parseFloat(props.firstValue) / parseFloat(props.secondValue) );
      }  
      props.setStatus(2);
    }
    const onclear = ()=>{
      
      if(props.status === 0){        
      props.setFirstValue(props.firstValue.replace( props.firstValue.slice(-1), ''))
      }else if(props.status === 1){      
      props.setSecondValue(props.secondValue.replace( props.secondValue.slice(-1), ''))
      }else{
        props.setFirstValue(' ');
        props.setSecondValue(' ');
        props.setAnswer(' ');
        props.setOperate(' ');
        props.setStatus(0);
      }

    }
     return(
      <div className="pre">
        <button  className="dots" onClick={onclear} >{props.val2}</button>
        <button className="zero"  onClick={result} >{props.val}</button>
        </div>
     )
     
        
}
  

  
export default Ansbutton;


    