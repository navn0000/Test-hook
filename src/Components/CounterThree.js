import React from "react";
import { useRef } from "react";

function  RefTuto(){
    const inputRef = useRef(null);

    const  onClick = () =>{
        inputRef.current.value = "";
        console.log(inputRef.current.value)
    }

    return(
        <div>
            <h1>UseRef</h1>
            <input Type="text"  placeholder="please Type here" ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}

export default RefTuto;