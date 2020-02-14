//import {createStore} from 'redux'
const redux = require('redux');
const createStore = redux.createStore;

//Initial state
const initState ={
    message: "Hello Redux",
    count :5        
}

//Reducer
const reducer = (state = initState, action)=>{
    //update the state and return new state
    if(action.type === "INC_CTR"){
        return {...state, count : state.count + 1 }
    }
    
    if(action.type === "DEC_CTR"){
        return {...state, count : state.count - 1 }
    }
    
    if(action.type === "UPD_CTR_BY"){
        return {...state, count : state.count + action.value }
    }
    return state;
}


//store
const store = createStore(reducer);
//console.log("state", store.getState());

//subscribe

const abc = store.subscribe(()=>{
    //console.log("state", store.getState());
})

//dispatch actions
store.dispatch({
    type:"INC_CTR",
})
//console.log("state", store.getState());

store.dispatch({
    type:"DEC_CTR",
})

//console.log("state", store.getState());

store.dispatch({
    type:"UPD_CTR_BY",
    value :10
})

//console.log("state", store.getState());