const redux=require('redux');
const bindActionCreators = redux.bindActionCreators
const createStore = redux.createStore;

//immer helps in updating state as a mutable object
const produce = require('immer').produce


//define action type
const STREET_UPDATED = "STREET_UPDATED";



//define action creator
const updateStreet = street =>{
   return{ 
        type:STREET_UPDATED,
        payload:street
    }
}


//define state
const initialState = {
    name:"Sadia",
    contact:"0238976543",
    address:{
        street:"AVS colony",
        city:"Mirpur Mathelo"
    }
}

//define cake reducer
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case STREET_UPDATED:
            // return{
            //     ...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }
            // }

            //above code is done using immer
            //accepts two arguments: current state and a callback with draft object as parameter
            return produce(state,(draft)=>{
                draft.address.street = action.payload
            })
        default:
            return state
    }
}



const store=createStore(reducer);

console.log("INITIAL STATE", store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log("Updated state: ",store.getState())
})


const actions = bindActionCreators({updateStreet},store.dispatch)
actions.updateStreet("ABC mall road")

unsubscribe()