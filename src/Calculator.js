import React, { useState} from 'react';
import './App.css';
import Button from './Button';
import Keybutton from './Keybutton';
import Ansbutton from './Ansbutton';


function Calculator(){
    const [status, setStatus] = useState(0);
    const [answer, setAnswer] = useState(' ');
    const [firstValue, setFirstValue] = useState(' ');
    const [secondValue, setSecondValue] = useState(' ');
    const [operate, setOperate] = useState(' ');
    const operations =['+', '-', '*','/'];
    const digits = [1,2,3,4,5,6,7,8,9,0,'.'];

    return (
      <div className="calcrights">

        <div className='displays'>
          <pre className='displays-inner'>{firstValue}</pre>
          <pre className='displays-inner'>{operate}</pre>
          <pre className='displays-inner'>{secondValue}</pre>
          <pre className='displays-inner'>{answer}</pre>
        </div>

        <div className="keypad">
          <div className='operation'>
            
            {operations.map(operation =>
              <Button key={operation}  setOperate={setOperate} setStatus={setStatus} operation={operation} > 
                </Button>)}
          </div>
          <div className='fullkeys'>
           {digits.map(digit =>
              <Keybutton key={digit}  digit={digit} 
                         status={status} firstValue={firstValue} setFirstValue={setFirstValue}
                         secondValue={secondValue} setSecondValue={setSecondValue}>
                {digit}</Keybutton>)} 
              
            <Ansbutton val={'='} val2={'c'} status={status} operate={operate} 
                      firstValue={firstValue} secondValue={secondValue}
                      setAnswer={setAnswer} setStatus={setStatus} setOperate={setOperate}
                      setFirstValue={setFirstValue} setSecondValue={setSecondValue}
            />
   
          </div>

        </div>

      </div>
    );
}

export default Calculator;