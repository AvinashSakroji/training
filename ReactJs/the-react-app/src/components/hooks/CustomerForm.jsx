import React from 'react'
import { useState ,useRef , useEffect} from 'react';
import { Customer } from '../../model/Customer';
import {withRouter} from 'react-router-dom'

const CustomerForm = (props) =>{

    console.log("CustomerForm", props)

    const [customer, setCustomer] = useState(new Customer(0,"",""));
    const nameInputRef =useRef(null);
    const idInputRef   =useRef(null);
    
    useEffect(()=>{
        console.log("name effect");
        if(nameInputRef.current.validity.valid){
            nameInputRef.current.style="";
        }else{
            nameInputRef.current.style="border:2px solid red";
        }
    },[customer.name])

    useEffect(()=>{
        console.log("Id effect");
        if(idInputRef.current.validity.valid){
            idInputRef.current.style="";
        }else{
            idInputRef.current.style="border:2px solid red";
        }
    },[customer.id])

    const save = () => {

        if (props.onSave) {
            if (idInputRef.current.validity.valid && nameInputRef.current.validity.valid) {
                props.onSave(customer)
                setCustomer(new Customer(0, "", ""))
            } else {
                alert("clear the validation issues")
            }

        }
    }

    const cancel = () => {
        props.onCancel();
    }

    const change = (evt, propName) => {

        const value = evt.target.value;

        const cust = { ...customer }
        if (propName === "id") {
            cust[propName] = value ? parseInt(value) : 0
        }else{
            cust[propName] = value;
        }
        

        setCustomer(cust)
    }

    return (
        <div>
            <fieldset>
                <p>ID</p>
                <div>
                    <input type="number"  
                       value={customer.id}
                       onChange = {(e)=>change(e,"id")}
                       required min="1" ref={idInputRef}></input>
                </div>
                <p>Name</p>
                <div>
                    <input value={customer.name}
                      onChange = {(e)=>{change(e,"name")}}
                      required pattern="[a-zA-z]{2,}" ref={nameInputRef}/>
                </div>
                <p>Location</p>
                <div>
                   <input value={customer.location} 
                    onChange = {(e)=>{change(e,"location")}}/>
                </div>
                <div>
                    <button onClick={save}>Save</button>
                    <button onClick={cancel}>Cancel</button>
                </div>
            </fieldset>

        </div>
    );
}

export default withRouter(CustomerForm);