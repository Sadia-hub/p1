import { buyCake } from "../redux"
import { connect } from "react-redux"
const CakeContainer = ({noOfCakes, buyCake}) =>{
    return <>
    <h1>Numer of Cakes {noOfCakes}</h1>
    <button
    onClick={buyCake}
    >Buy a Cake</button>
    </>
}

//this will provide a noOfCake prop to the CakeCOntainer Component
const mapStateToProps = state =>{
    return {
        noOfCakes:state.noOfCakes
    }
}

//this prop would dispatch the buyCake action
const mapDispatchToProps = dispatch =>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);