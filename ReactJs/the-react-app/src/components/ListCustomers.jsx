import React, { Component, PureComponent } from 'react';
import { Customer } from '../model/Customer';
import './ListCustomers.css'
import CustomerForm from './CustomerForm';
import Axios from 'axios'
import SimpleHOC from './SimpleHOC';


class ListCustomers extends PureComponent {

    state = {
        data: [],
        addMode: false,
        selectedCustomer: null
    }

    constructor(props) {
        super(props);

        this.url = "https://calm-beach-18228.herokuapp.com/customers";
        // this.state.data.push(new Customer(1,"Facebook","Banglore"));
        // this.state.data.push(new Customer(2,"Google","Hyderabad"));
        // this.state.data.push(new Customer(3,"Apple","Banglore"));
        // this.state.data.push(new Customer(4,"Reliance","Mumbai"));

        console.log("[Liscustomer] constructor")
    }

    componentWillMount() {
        console.log("[Liscustomer] componentWillMount")
    }

    async componentDidMount() {
        console.log("[Liscustomer] componentDidMount")
        // Axios.get(this.url).then((res)=>{
        //     console.log("success response", res)
        // },(res)=>{
        //     console.log("Error response", res)
        // })

        //async - await

        try {
            const resp = await Axios.get(this.url);
            console.log("success response", resp);

            const customers = resp.data.map(item =>
                new Customer(item.id, item.name, item.location))

            this.setState({
                data: customers
            })
        } catch (error) {
            console.log("success response", error)
        }


    }

    componentWillReceiveProps() {
        console.log("[Liscustomer] componentWillReceiveProps")
    }
    // shouldComponentUpdate(){
    //     console.log("[Liscustomer] shouldComponentUpdate")
    //     return true;
    // }

    componentWillUpdate() {
        console.log("[Liscustomer] componentWillUpdate")

    }

    deleteCustomer = async (index) => {

        try {
            const deleteUrl = this.url + "/" + this.state.data[index].id;
            await Axios.delete(deleteUrl);
            alert("deleted")

            //State has to be considered as immutable
            const updatedCustomers = [...this.state.data];
            updatedCustomers.splice(index, 1);
            this.setState({
                data: updatedCustomers
            });
        } catch (error) {
            alert("failed to delete")
        }

    }

    addCustomer = async (customer) => {


        try {
            const response = await Axios.post(this.url, customer)

            const updatedCustomers = [...this.state.data];
            updatedCustomers.push(customer)
            this.setState({
                data: updatedCustomers
            });
            alert("Saved")
        } catch (error) {
            alert("Failed to Save")
        }



    }

    closeNewForm = () => {
        this.setState({
            ...this.state,
            addMode: false
        })
    }

    editCustomer = (cust) => {
        this.setState({
            selectedCustomer: cust
        })
    }

    renderCustomers() {
        return (this.state.data.map((customer, index) => {
            return (
                <div className="customer" key={customer.id}>
                    <p>Id : {customer.id}</p>
                    <p>Name : {customer.name}</p>
                    <p>location : {customer.location}</p>
                    <div>
                        <button onClick={this.deleteCustomer.bind(this, index)}>Delete</button>
                    </div>&nbsp;
                    <div>
                        <button onClick={() => this.editCustomer(customer)}>Edit</button>
                    </div>
                </div>
            )

        }))
    }

    addNew = (evt) => {
        evt.preventDefault();
        this.setState({
            addMode: true
        })
    }

    editUpdate = async (customer) => {

        try {

            await Axios.put(this.url, Customer);
            alert("updated")
            const updatedCustomers = [...this.state.data];
            const index = updatedCustomers.findIndex(cust => cust.id === customer.id)
            updatedCustomers[index] = customer;

            this.setState({
                data: updatedCustomers,
                selectedCustomer: null
            })
        } catch (error) {

        }


    }

    render() {
        console.log("[Liscustomer] Render")
        return (
            <div>
                <h2>Customers</h2>

                <div>
                    <a href="#" onClick={this.addNew}> Add New</a>
                </div>
                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                    {this.state.data.length !== 0 ? this.renderCustomers() :
                        <p>No records</p>}
                </div>

                {this.state.addMode ? <CustomerForm
                    onCancel={this.closeNewForm}
                    onSave={this.addCustomer} /> : null}

                {this.state.selectedCustomer ?
                    <CustomerForm key={this.state.selectedCustomer.id}
                        customer={this.state.selectedCustomer}
                        onSave={this.editUpdate}
                        onCancel={this.editCancel}
                    /> : null}
            </div>
        );
    }

}

export default  SimpleHOC(ListCustomers) ;