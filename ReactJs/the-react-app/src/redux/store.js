import {createStore, applyMiddleware, compose ,combineReducers} from 'redux'
import ReduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

//Initial state
const initState ={
    message: "Hello Redux",
    count :5,
    customers : [] ,
    isAuth :  false      
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

    if(action.type === "FETCH_CUSTOMERS"){
        return {...state, 
            customers: action.payload
        }
    }
    
    return state;
}

// Middleware
const logger = (store)=>{
    return (next) => {

        return (action)=>{

            console.log("Action: ", action);
            console.log("State before: ", store.getState());
            const result = next(action);  
            console.log("State after: ", store.getState());
            return result;
        }
    }
}

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    app: reducer,
    form: formReducer
  })

//store
// export const store = createStore(reducer , 
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//console.log("state", store.getState());

//export const store = createStore(reducer,applyMiddleware(logger,ReduxThunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, ReduxThunk)));