import { userContext } from "../App";
import { useContext } from "react";

const D = () =>{

    const user = useContext(userContext);

    return <>
    <h1>Component D uses prop passed from App. It is accessible to all decendent components in A</h1>
    <h1>Context Value: {user}</h1>
    </>
}

export default D;