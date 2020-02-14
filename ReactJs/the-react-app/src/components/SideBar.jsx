import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon'

const SideBar = ({routes}) =>{

    return(
        <List component="nav">
            {
                routes.map((item, index)=>{
                     return(
                         <ListItem button key={index} component ={Link} to={item.path}>
                             {item.icon ? <ListItemIcon><Icon>{item.icon}</Icon> </ListItemIcon> : null}
                             <ListItemText primary={item.name}/>
                         </ListItem>
                     )   
                })
            }
        </List>
    );
}

export default SideBar;