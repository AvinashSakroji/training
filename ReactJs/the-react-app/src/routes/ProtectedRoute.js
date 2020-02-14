import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const ProtectedRoute = (props) => {

    const ProtectedComponent = props.component;
    const path = props.path;
    const exact = props.exact;
    const isAuth = props.isAuth;
    console.log(isAuth);
    return (
        <Route path={path} exact={exact} render={() => {
            console.log("isAuth", isAuth)
            if(isAuth){
                
                return <ProtectedComponent />
            }
            else{
                return <Redirect to="/"></Redirect>
            }
        }}>
           
        </Route>
    );
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.app.isAuth
    }
};


export default connect(mapStateToProps)(ProtectedRoute);