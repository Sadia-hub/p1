import { addCake } from "../redux"
import { useSelector, useDispatch } from "react-redux"

const HooksCakeContainer = () =>{
    const noOfCakes = useSelector(state=>state.cake.noOfCakes)
    const dispatch = useDispatch();
    return <>
    <h1>Using Redux Selectors</h1>
    <h1>No of Cakes: {noOfCakes}</h1>
    <button onClick={()=>dispatch(addCake())}>Add a Cake</button>
    </>
}


export default HooksCakeContainer;