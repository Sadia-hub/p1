const redux=require('redux');
const createStore = redux.createStore;
//alternative way to dispatch actions is bind action creators. However, it's an old technique. Not necessary these
//days
const bindActionCreators = redux.bindActionCreators



const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
//adding other two actions
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";



//define action creator
const orderCake = ()=>{
    return {
        type:CAKE_ORDERED,
        payload:1
    }
}

const restockCake = (qty=1)=>{
    return {
        type:CAKE_RESTOCKED,
        payload:qty
    }
}

const orderIceCream = () =>{
    return {
        type:ICE_CREAM_ORDERED,
        payload:1
    }
}

const restockIceCream = (qty)=>{
    return {
        type:ICE_CREAM_RESTOCKED,
        payload:qty
    }
}

//define state
const initialCakeState = {
    noOfCakes:10,
    otherProperties:10
}

const initialIceCreamState = {
    noOfIceCreams:10
}

//define cake reducer
const cakeReducer = (state=initialCakeState, action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                noOfCakes:state.noOfCakes-1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                noOfCakes:state.noOfCakes+action.payload
            }
        default:
            return state
    }
}

//ice cream reducer
const iceCreamReducer = (state=initialIceCreamState,action)=>{
    switch(action.type){
        case ICE_CREAM_ORDERED:
            return{
                ...state,
                noOfIceCreams:state.noOfIceCreams-1
            }
        case ICE_CREAM_RESTOCKED:
            return{
                ...state,
                noOfIceCreams:state.noOfIceCreams+action.payload
            }
        default:
            return state
    }
}

const store=createStore(cakeReducer);

console.log("INITIAL STATE", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("Updated state: ",store.getState())
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const actions = bindActionCreators({orderCake,restockCake},store.dispatch)
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

unsubscribe()