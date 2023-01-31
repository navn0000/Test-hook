import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function EffectTut(){
    const [data, setData] = useState("");

    useEffect( ()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[10].email);
        
        });
    }, [] )
    return(
        <div>
            <h1>useEffect</h1>
            <p>{data}</p>
        </div>
    );
}

export default EffectTut;