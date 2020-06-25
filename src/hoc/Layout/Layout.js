import React,{Component} from 'react';
import Auxilary from '../Auxillary/Auxilary';
import classes from './Layout.module.css';
import Toolbaar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer: false

            }
    sideDrawerCloseHandler= () => {
            this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return {showSideDrawer:! prevState.showSideDrawer};
    });
}
    render(){
        return(
    
    <Auxilary>

        <Toolbaar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
        open={this.state.showSideDrawer}
        closed={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Auxilary>
        )
}
}

export default Layout;