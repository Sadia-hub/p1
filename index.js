const redux = require('redux')
const createStore = redux.createStore





const initialState= {
    loading:false,
    users:[],
    error:''
}


//actions

//if data is still fetching loading should be true
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';

//this action depends upon the "FETCH_USERS_REQUEST" 
//if data loaded successfully, 
//1. loading should be false, 
//2. return data that is fetched
//3. clear error message
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

////this action depends upon the "FETCH_USERS_REQUEST" 
//if data could not load successfully
//1. Set loading to false
//2. return empty users list 
//3. set error message
const FETCH_USERS_FAILTURE = 'FETCH_USERS_FAILURE';


//action creators
const fetchUsersRequest = () =>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users =>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure = errorMessage =>{
    return {
        type:FETCH_USERS_FAILTURE,
        payload:errorMessage
    }
}


//reducers

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILTURE:
            return {
                ...state,
                loading:false,
                user:[],
                error:action.payload
            }
        default:
            return state;
    }
}

const store = createStore(reducer);