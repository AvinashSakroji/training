import React, { useState, useEffect, useCallback, Fragment } from 'react'
import Axios from 'axios'
import "../ListCustomers.css"
import { Customer } from '../../model/Customer';
import CustomerForm from './CustomerForm'
import SimpleHOC from '../SimpleHOC';
import { Link } from 'react-router-dom';
import CustomerView from './CustomerView';
import CircularProgress from '@material-ui/core/CircularProgress';

const ListCustomers = (props) => {

    const [data, setData] = useState([]);
    const [addMode, setAddMode] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [loaded, setLoaded] = useState(false)
    const url = "https://calm-beach-18228.herokuapp.com/customers";

    //console.log("List Customers", props)

    //componentDidMount
    useEffect(() => {
        //console.log(" in useEffect");

        //IIFE Immediately invoked function expression
        (async function () {

            try {
                const resp = await Axios.get(url);
                console.log("success response", resp);

                const customers = resp.data.map(item =>
                    new Customer(item.id, item.name, item.location))
                setData(customers);
                setLoaded(true)

            } catch (error) {
                console.log("success response", error)
            }
            //console.log("invoked iffe")
        })();



        // this function is called when the componenDidUnmounted
        return () => {
            console.log("clean up code")
        }
    }, [])

    const deleteCustomer = useCallback(async (index) => {
        console.log("data", data, index)
        try {
            const deleteUrl = url + "/" + data[index].id;
            await Axios.delete(deleteUrl);
            alert("deleted")

            //State has to be considered as immutable
            const updatedCustomers = [...data];
            updatedCustomers.splice(index, 1);
            setData(updatedCustomers)
        } catch (error) {
            alert("failed to delete")
            console.log("error", error)
        }
    }, [data])


    const editCustomer = useCallback(() => { }, [loaded])

    const addNew = (evt) => {
        evt.preventDefault();
        setAddMode(true)
    }

    const closeNewForm = () => {
        setAddMode(false);
    }

    const addCustomer = useCallback(async (customer) => {

        try {
            const response = await Axios.post(url, customer)

            const updatedCustomers = [...data];
            updatedCustomers.push(customer)
            setData(updatedCustomers)
            alert("Saved")
        } catch (error) {
            console.log("error", error)
            alert("Failed to Save")

        }



    }, [data])

    function renderCustomers() {
        return (data.map((customer, index) => {
            return (
                <div className="customer" key={customer.id}>
                    <CustomerView customer={customer}

                        deleteCustomer={deleteCustomer} editCustomer={editCustomer} index={index} />

                </div>
            )

        }))
    }

    return (
        <div>
            <h2>List Customers with "Hooks"</h2>
            {loaded ?
                <Fragment>
                    <div>
                        <a href="#" onClick={addNew}> Add New</a>
                    </div>

                    <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                        {data.length !== 0 ? renderCustomers() :
                            <p>No records</p>}
                    </div>

                    {addMode ? <CustomerForm
                        onCancel={closeNewForm}
                        onSave={addCustomer} /> : null}
                </Fragment> : <CircularProgress />}


        </div>
    )

}

export default SimpleHOC(ListCustomers);