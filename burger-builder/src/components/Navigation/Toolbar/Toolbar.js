import React from 'react'
import classes from './Toolbar.css';
import Logo from './../../Logo/Logo';
import NavigtionItems from './../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle';

//This is a funcional component. Dont need to
//manage any state.
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavigtionItems/>
        </nav>
    </header>
);

export default toolbar;

