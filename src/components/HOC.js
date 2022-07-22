import React from 'react'
import { useState } from 'react'




// Take in a component as argument WrappedComponent
const HOC = (WrappedComponent) => {

  

// And return another component
  const NewComponent = () => {
    const[count, setCount] = useState(0)

    const increment = () =>{
    setCount(prev=>prev+1)
  }

    
      return <WrappedComponent count={count} increment={increment}/>;
   
  }
  return  NewComponent;
};

export default HOC