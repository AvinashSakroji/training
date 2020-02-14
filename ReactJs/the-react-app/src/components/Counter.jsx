import React, { Component } from 'react'
import { AppContext } from '../context/AppContext'
import SimpleHOC from './SimpleHOC';

class Counter extends Component {

    state = {
        count: 10
    }
    inputRef = null;

    constructor(props) {
        super(props);
        // It is compulsory to bind the method,
        // It will bind the class with the function.
        this.inc = this.inc.bind(this);
        this.decr = this.decr.bind(this);
    }

    inc() {
        //this.state.count++; //this will not work
        const updatedCount = this.state.count + 1;
        //this.setState(newState, callback_function)
        //it is invoked Async
        this.setState({
            count: updatedCount
        }, () => {
            console.log("state Count", this.state.count)
        })
    }

    decr() {
        //this.state.count++; //this will not work
        const updatedCount = this.state.count - 1;
        //this.setState(newState, callback_function)
        //it is invoked Async
        this.setState({
            count: updatedCount
        }, () => {
            console.log("state Count", this.state.count)
        })
    }

    dec = () => {
        const updatedCount = this.state.count - 1;
        this.setState({
            count: updatedCount
        }, () => {
            console.log("state Count", this.state.count)
        })
    }

    change = (e) => {
        this.setState({
            count: e.target.value
        })
    }

    update = (e) => {
        this.setState({
            count: this.inputRef.value ? parseInt(this.inputRef.value) :
                this.inputRef.value
        })
    }
    render() {
        return (
            <div>
                <h2>Counter : {this.props.title} -- {this.state.count}</h2>
                <p>This is a class based Component</p>

                <div>
                    <p> App Name : {this.context.appName}</p>
                    <p> User Name : {this.context.userName}</p>
                </div>

                <div>
                    <button id= "incBtn" onClick={this.inc}>Increment</button> &nbsp;
                    <button onClick={this.decr}>Decrement</button>
                </div>
                <div>
                    Count: <input type="number" value={this.state.count} onChange={this.change} />
                </div>

                <div>
                    Count :<input type="number" ref={r => this.inputRef = r} /> &nbsp;
                    <button onClick={this.update}>Update</button>
                </div>
            </div>
        );
    }

}
Counter.contextType = AppContext;

export default Counter;