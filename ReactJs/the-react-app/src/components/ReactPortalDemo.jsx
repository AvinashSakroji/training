import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const ReactPortalDemo = (props) =>  {

    // let el;
    // useEffect(() => {
    //     console.log("in effect")
    //    // el = document.getElementById("modal");
    //     //console.log(el);
    // }, [])

     return ReactDOM.createPortal((
         <div>
             <h4>React Portal</h4>
             <p>This is created using react portal</p>
         </div>
     ), document.getElementById("messages"));

}

export default ReactPortalDemo;