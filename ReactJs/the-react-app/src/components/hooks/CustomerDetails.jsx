import React from 'react'
import SimpleHOC from '../SimpleHOC';
import CustomerView from './CustomerView';

const CustomerDetails = (props) => {

    const back = () =>{
        props.history.goBack();
    }
    console.log("customerDetails-", props)
    return(
        <div>
            <h3>Customer Details for {props.match.params.id}</h3>
            <br/>
            <button onClick={back}>Back</button>
        </div>
    )
}

export default SimpleHOC(CustomerDetails);