const CAKE_ORDERED = "CAKE_ORDERED";

//define action creator
const cakeOrdered = ()=>{
    return {
        type:CAKE_ORDERED,
        quantity:1
    }
}

//define state
const initialState = {
    noOfCAkes:10,
    otherProperties:10
}

//define reducer
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                noOfCAkes:noOfCAkes-1
            }
        default:
            return state
    }
}