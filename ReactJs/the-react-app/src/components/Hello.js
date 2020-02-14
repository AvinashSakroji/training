import React from 'react';

const Hello = (props) => {

   
//should return the JSX
return (
    <div >
        <h1> Hello {props.message} </h1>
        <p>This is a Functional components</p>
        <p> Generated at {new Date().toTimeString()}</p>
    </div>
);
}

export default Hello;