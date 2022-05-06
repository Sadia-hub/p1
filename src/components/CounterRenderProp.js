import { useState } from "react";

const CounterRenderProp = ({render}) =>{

    const[count, setCount] = useState(0);
    const increment = () =>{
        setCount((prev)=>prev+1);
    }
    
    return<>
    {
        render(count, increment)
    }
    </>
}

export default CounterRenderProp;