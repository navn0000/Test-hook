import React from 'react';
import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(1);
    const [showText, setShowText] = useState(true);
    const [evenText, setEvenText] = useState(false)

    let Increment = () =>{
        setCount(count+1);
        setShowText(!showText);
        setEvenText(!evenText)
    }

   
    
    
    return(
        <div>
            <h1>UseState</h1>
          <h1>{count}</h1>
          <p>Please click on the below button</p>
          <button onClick={Increment} className='btn btn-primary pl-5 py-5'>Increment</button>
          {showText && <p>Odd</p>}
          {evenText && <p>Even</p>}
          
        </div>
    );
}

export default Counter;