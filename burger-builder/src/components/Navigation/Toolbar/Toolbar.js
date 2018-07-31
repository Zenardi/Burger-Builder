import React from 'react'
import classes from './Toolbar.css';
import Logo from './../../Logo/Logo';
import NavigtionItems from './../NavigationItems/NavigationItems';

//This is a funcional component. Dont need to
//manage any state.
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo height="80%" />
        <nav>
            <NavigtionItems/>
        </nav>
    </header>
);

export default toolbar;

