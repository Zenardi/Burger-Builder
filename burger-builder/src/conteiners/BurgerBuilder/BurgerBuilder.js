import React, {Component} from 'react';
import AppAuxi from '../../hoc/AppAuxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // constructor(props){     super(props);     this.state = {         ...     } }
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4,
        puchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object
            .keys(ingredients)
            .map(igkey => {;
                return ingredients[igkey]
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({puchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this
            .state
            .ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
        
    }

    removeIngredientHandler = (type) => {
        const oldCount = this
            .state
            .ingredients[type];
        if (oldCount <= 0) 
            return;
        
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
        
    }


    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
      this.setState({purchasing: false})
    }
    

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (
            <AppAuxi>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients= {this.state.ingredients}/> 
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disableInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.puchasable}
                        ordered={this.purchaseHandler}/>
            </AppAuxi>

        );
    }
}

export default BurgerBuilder;