import React from 'react';
import AppAuxi from '../../hoc/AppAuxi';
import classes from './Layout.css'

const layout = (props) => (
    <AppAuxi>
        <div> Toolbar, Slidedrawer, Backdrop </div> 
        <main className={classes.Content}> {props.children} </main> 
    </AppAuxi>
);

export default layout;