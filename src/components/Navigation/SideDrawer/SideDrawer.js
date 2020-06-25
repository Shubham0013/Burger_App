import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer1.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Auxillary from '../../../hoc/Auxillary/Auxilary';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses =[classes.SideDrawer ,classes.Open];
    }


    return(
        <Auxillary>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
                
                <nav>
                    <NavigationItems/>
                </nav>
        </div>
        </Auxillary>

    );
};

export default sideDrawer;
