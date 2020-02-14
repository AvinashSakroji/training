import React from 'react'
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CustomerView = ({customer, editCustomer, deleteCustomer, index}) =>{
    console.log("Customer View", customer)
    return (

        <Card variant="elevation">
            <CardContent>
                <Typography>
                    id: {customer.id}
                </Typography>
                <Typography>
                    Name: {customer.name}
                </Typography>
                <Typography>
                    Location: {customer.location}
                </Typography>
            </CardContent>
            <CardActions>
                    <Button variant="contained" 
                    color="secondary" onClick={()=> {deleteCustomer(index)}} >
                            Delete
                    </Button>
                    &nbsp;

                    <Button variant="contained" 
                    color="primary" onClick={()=>{editCustomer(customer)}} >
                            Edit
                    </Button> &nbsp;
                    <Link to={"customers/"+ customer.id}>Details </Link>
            </CardActions>
        </Card>
        // <div>
        //     <p>Id : {customer.id}</p>
        //     <p>Name : {customer.name}</p>
        //     <p>location : {customer.location}</p>
        //     <div>
        //        <button 
        //        onClick={() =>{deleteCustomer(index)}}>Delete</button>
        //             &nbsp;
                    
        //        <button 
        //        onClick={() => editCustomer(customer)}>Edit</button>
        //             &nbsp;
        //         <Link to={"customers/"+ customer.id}>Details </Link>
        //             </div>
        // </div>
    )
}
//HOC Rect 16.3 memo
//Customerview will be updated only if props or state changes
export default React.memo(CustomerView);