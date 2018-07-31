import React from 'react';
import AppAuxi from '../../hoc/AppAuxi';
import classes from './Layout.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';


const layout = (props) => (
    <AppAuxi>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Content}> {props.children} </main> 
    </AppAuxi>
);

export default layout;