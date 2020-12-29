import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
 state = {
  ShowSideDrawer: false
 }

 sideDrawerCloserHandler = () => {
  this.setState({ ShowSideDrawer: false });
 }
 sideDrawerToggleHandler = () => {
  this.setState((prevState) => {
   return { ShowSideDrawer: !prevState.ShowSideDrawer };
  })
 };

 render() {
  return (
   <>
    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
    <SideDrawer open={this.state.ShowSideDrawer} closed={this.sideDrawerCloserHandler} />
    <main className={classes.Content}>
     {this.props.children}
    </main>
   </>
  );
 }
}

export default Layout;