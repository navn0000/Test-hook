import { useState, createContext } from "react";
import Child1 from "./Children/Child1";

export const CountContext = createContext(0)

export default function Parent(){
    const [count, setCount] = useState(0)

    return(
        <CountContext.Provider value={count}>
            <Child1 />
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Add</button>
            <button onClick={()=> setCount(count-1)}>-</button>

        </CountContext.Provider>
    );

}