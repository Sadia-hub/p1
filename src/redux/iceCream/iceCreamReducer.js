import { BUY_ICE_CREAM } from "./iceCreamTypes"

const initialState = {
    noOfIceCreams:10
}

const iceCreamReducer = (state=initialState, action)=>{
    switch(action.type){

        case BUY_ICE_CREAM:
            return{
                ...state,
                noOfIceCreams:state.noOfIceCreams-1
            }
        default:
            return state
    }
}

export default iceCreamReducer