import { buyCake } from "../redux"
import { connect } from "react-redux"
const CakeContainer = ({noOfCakes, buyCake}) =>{
    return <>
    <h1>Using mapStateToProps and mapDispatchToProps</h1>
    <h1>Numer of Cakes {noOfCakes}</h1>
    <button
    onClick={buyCake}
    >Buy a Cake</button>
    </>
}

//this will provide a noOfCake prop to the CakeCOntainer Component
const mapStateToProps = state =>{

    //cake in state.cake.noOfCake specifies the key mentioned for cakeReducer into object passed to combineReducer
    return {
        noOfCakes:state.cake.noOfCakes
    }
}

//this prop would dispatch the buyCake action
//it will provide additional prop to our component called buy cake.
//it can be used to call buyCake action when button "Buy a Cake" is clicked
const mapDispatchToProps = dispatch =>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);