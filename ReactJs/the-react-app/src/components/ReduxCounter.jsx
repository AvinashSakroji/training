import React from 'react';
import {connect} from 'react-redux';
import {Customer} from '../model/Customer'
//import {createINCAction, createDECAction} from '../redux/actionCreators'

import * as actionCreators from '../redux/actionCreators'


const ReduxCounter = ({ctr, inc, dec, fetch, customers}) => {

    console.log("customers",customers)
    //destructuring
    //const { ctr } = props;
    return (
        <div>
            <h2>Redux Counter</h2>
            <h4>Counter: {ctr}</h4>

            <div>
                <button onClick={inc}>Increment</button> &nbsp;
                <button onClick={dec}>Decrement</button> &nbsp;
                <button onClick={fetch}>Fetch Customers</button>
            </div>
            <div>
                {
                customers.map(cust => {
                    return   ( 
                       <div>
                           <p> ID:{cust.id}</p>
                           <p> Name:{cust.name}</p>
                       </div>)

                   })
                }
            </div>
        </div>
    )

}

//Maps redux state to component props
const mapStateToProps = (state)=>{
        //redux state.count is now available as props.ctr
        return{
            ctr : state.app.count,
            customers: state.app.customers
        }
}


const mapDispatchToProps = (dispatch) =>{
    return{
        inc :() => {dispatch(actionCreators.createINCAction())},
        dec :() => {dispatch(actionCreators.createDECAction())},
        fetch:() =>{dispatch(actionCreators.createfetchCustomersAction())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounter);
// Above line equivalent.
// const hoc = connect();
// export default hoc(ReduxCounter)