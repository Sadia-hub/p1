// import { configure } from "@testing-library/react";
// import { createStore, Store } from "redux";

const redux=require('redux');

const createStore = redux.createStore;


const CAKE_ORDERED = "CAKE_ORDERED";

//define action creator
const orderCake = ()=>{
    return {
        type:CAKE_ORDERED,
        quantity:1
    }
}

//define state
const initialState = {
    noOfCakes:10,
    otherProperties:10
}

//define reducer
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                noOfCakes:state.noOfCakes-1
            }
        default:
            return state
    }
}

const store=createStore(reducer);

console.log("INITIAL STATE", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("Updated state: ",store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()