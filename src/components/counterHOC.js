import { useState } from "react"

const counterHOC = (OriginalComponent, increment) =>{

    
    const Component = (props)=>{

        const[count,setCount] = useState(0);

        const handleCounter = () =>{
            setCount((prev)=>prev+increment);
        }

        return <OriginalComponent 
        count={count} 
        handleCounter={handleCounter}
        {...props}
        />
    }

    return Component;
}

export default counterHOC;


//we have reused the couting functionality in both Counter and HoverCounter components