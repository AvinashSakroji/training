import React from 'react'

//HOC is a simple function ==> recieves the component to wrap
const SimpleHOC = (WrappedComponent)=>{


    //return a new react component
    return(props) =>{
        return (
            <div style={{border:"2px solid yellow", margin: "7px"}}>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}

export default SimpleHOC;