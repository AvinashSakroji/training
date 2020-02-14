import React, { useContext, useState, useReducer } from 'react';


const ReducerDemoError = (props) =>  {
                    
    const [count, dispatch]  = useReducer(reducer, 10);

    function reducer(state, action){

        console.log(state);
        if(action.type === "INC"){
            return state + 1
        }
        // if(action.type === "DECR"){
        //     return state - 1
        // }

        
        if(action.type === "DECR"){
            return {
                count: state + 1
            }
        }
        return state;
    }

    const inc = () => {
        dispatch({type: "INC"})
    }
    const decr = () => {
        dispatch({type: "DECR"})
    }
    

     return (
         <div>
             <h3>Testing Errors</h3>
             <p>Count: {count}</p>
             <button onClick={inc}>++</button>
             <button onClick={decr}>--</button>
             
         </div>
     );

}

export default ReducerDemoError;