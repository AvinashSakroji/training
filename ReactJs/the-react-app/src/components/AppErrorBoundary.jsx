import React, {Component} from 'react';


class AppErrorBoundary extends Component {

    state ={
        error: null,
        errorInfo : null
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error, errorInfo
        })
    }

     render(){
         if(this.state.error){
            return(
                <div>
                    <h2> Something went wrong</h2>
                    <p>
                        {this.state.errorInfo.componentStack}
                    </p>
                </div>
            )
         }else{
            return this.props.children;
         }
     }

}

export default AppErrorBoundary;