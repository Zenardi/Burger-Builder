import React, {Component} from 'react';
import AppAuxi from '../../hoc/AppAuxi';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    render(){
        return (
            <AppAuxi>
                <Burger/>
                <div>Build Controls</div>
            </AppAuxi>

        );
    }
}

export default BurgerBuilder;