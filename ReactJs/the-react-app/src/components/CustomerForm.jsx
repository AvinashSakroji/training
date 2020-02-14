import React, {Component, PureComponent} from 'react';
import { Customer } from '../model/Customer';
import PropTypes from 'prop-types';


class CustomerForm extends PureComponent {

    state ={
         customer : new Customer(0,"","")
    }

    constructor(props){
        super(props);
        this.initState = {...this.state};
        // if(this.props.customer){
        //      this.state.customer = this.props.customer;
        // }
    }

    static getDerivedStateFromProps(nextProps, currentState){

        if(nextProps.customer && nextProps.customer.id !== currentState.customer.id){
            //return the new state(updated/dervied)
            return{
                ...currentState,
                customer: nextProps.customer
            }
        }else{
            //no change in state
            return null;
        }
    }

    change = (evt, propName)=>{
        const value = evt.target.value;

        const customer = {...this.state.customer};
        if(propName === "id"){
            customer[propName] = value ? parseInt(value) : 0
        }
        customer[propName] = value;

        this.setState({
            customer
        })
    }

    save=()=>{
        this.props.onSave(this.state.customer)
        this.setState(this.initState)  
        }

    cancel = () => {
        this.props.onCancel();
    }

     render(){
         return (
             <div>
                 <fieldset>
                     <p>ID</p>
                     <div>
                         <input type="number"  
                            value={this.state.customer.id}
                            onChange = {(e)=>this.change(e,"id")}
                            required min="1"></input>
                     </div>
                     <p>Name</p>
                     <div>
                         <input value={this.state.customer.name}
                           onChange = {(e)=>{this.change(e,"name")}}
                           required pattern="[a-zA-z]{2,}"/>
                     </div>
                     <p>Location</p>
                     <div>
                        <input value={this.state.customer.location} 
                         onChange = {(e)=>{this.change(e,"location")}}/>
                     </div>
                     <div>
                         <button onClick={this.save}>Save</button>
                         <button onClick={this.cancel}>Cancel</button>
                     </div>
                 </fieldset>

             </div>
         );
     }

}

CustomerForm.propTypes = {
    customer: PropTypes.instanceOf(Customer),
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func
    
}

export default CustomerForm;